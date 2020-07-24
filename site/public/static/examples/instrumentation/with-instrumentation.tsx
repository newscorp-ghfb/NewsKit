import {withInstrumentation, EventTrigger} from 'newskit';

export interface MySpecialCustomButtonProps {
  buttonText: string;
}

export const MySpecialCustomButton: React.FC<
  MySpecialCustomButtonProps
> = withInstrumentation(({fireEvent, buttonText}) => (
  <button
    onClick={() =>
      fireEvent({
        originator: 'my-special-custom-button',
        trigger: EventTrigger.Click,
        context: {
          buttonText,
        },
      })
    }
  >
    {buttonText}
  </button>
));
