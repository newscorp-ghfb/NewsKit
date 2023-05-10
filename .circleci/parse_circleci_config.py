print('parsin config')


# env variables come from one of the following:
# 1. defined within shell command of a run step (e.g. FOO=BAR, FOO="BAR")
# 2. declared with environment key for a run step
# 3. declared with environment key for a job
# 4. built-in variables
# 5. context
# 6. project-level

# env variables are used in one of the following ways:
# 1. by orbs (under the hood)
# 2. $VARIABLE_NAME
# 3. ${VARIABLE_NAME}
# 4. OTHER?



# how would static analysis work:





# Program to convert yaml file to dictionary
import yaml
import re
import json


def read_config(filename):
  with open(filename, 'r') as stream:
    try:
      d=yaml.safe_load(stream)
      return d
    except yaml.YAMLError as e:
      print(e)


def find_usages(value):
  form_1 = re.findall("\$([a-zA-Z_]+[a-zA-Z0-9_]*)", value)
  form_2 = re.findall("\${([a-zA-Z_]+[a-zA-Z0-9_]*)}", value)
  return form_1 + form_2


def iterate_keys(obj, path='', usages=None):
  # todo: iterate through once to find environment variables defined in `environment` or `run` keys within this object
  # these plus those from the context above are the variables that this object has access to
  # then look for all usages within this object and compare the two

  usages = usages or {}
  if isinstance(obj, dict):
    for k, v in obj.items():
      usages = iterate_keys(v, path="{}.{}".format(path, k), usages=usages)
  elif isinstance(obj, list):
    for i, o in enumerate(obj):
      usages = iterate_keys(o, path="{}.{}".format(path, i), usages=usages)
  elif isinstance(obj, str):
    for usage in find_usages(obj):
      usages.setdefault(usage, [])
      usages[usage].append(path)
  else:
    pass

  return usages


def run():
  config = read_config('.circleci/config.yml')
  usages = iterate_keys(config)
  print(json.dumps(usages, indent=4))


run()

