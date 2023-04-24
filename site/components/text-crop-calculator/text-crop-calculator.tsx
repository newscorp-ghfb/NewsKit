import React, {useState} from 'react';
import {styled} from 'newskit*';

const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;
  line-height: 1.5;
  color: rgb(26, 32, 44);
  box-sizing: border-box;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
`;

const InnerContainer = styled.div`
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;
  color: rgb(26, 32, 44);
  box-sizing: border-box;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
  font-size: 150px;
  font-family: Roboto;
  line-height: normal;
  position: relative;
  overflow: auto;
  padding-left: 130px;
  padding-right: 150px;
`;

const InnerContainer2 = styled.div`
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;
  color: rgb(26, 32, 44);
  font-size: 150px;
  font-family: Roboto;
  line-height: normal;
  box-sizing: border-box;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  position: relative;
`;

const TextContainer1 = styled.div`
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;
  color: rgb(26, 32, 44);
  font-size: 150px;
  font-family: Roboto;
  line-height: normal;
  box-sizing: border-box;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fbb6ce;
  opacity: 0.3;
`;

const TextContainer2 = styled.div`
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;
  font-size: 150px;
  font-family: Roboto;
  line-height: normal;
  box-sizing: border-box;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
  z-index: 1;
  color: #153e75;
`;

const ArrowContainer = styled.div`
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;
  font-size: 150px;
  font-family: Roboto;
  line-height: normal;
  box-sizing: border-box;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
  color: #cbd5e0;
  height: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;

const ArrowUp = styled.div`
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;
  font-size: 150px;
  font-family: Roboto;
  line-height: normal;
  color: #cbd5e0;
  box-sizing: border-box;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
  width: 0;
  height: 0;
  border-bottom: 12px solid currentColor;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
`;

const ArrowLine = styled.div`
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;
  font-size: 150px;
  font-family: Roboto;
  line-height: normal;
  color: #cbd5e0;
  box-sizing: border-box;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
  height: 100%;
  border-left: 3px solid currentColor;
`;

const ArrowDown = styled.div`
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;
  font-size: 150px;
  font-family: Roboto;
  line-height: normal;
  color: #cbd5e0;
  box-sizing: border-box;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
  width: 0;
  height: 0;
  border-top: 12px solid currentColor;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
`;

const MetricContainer = styled.div<{
  left: number;
  right: number;
  height: number;
  bottom: number;
}>`
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;
  color: rgb(26, 32, 44);
  font-size: 150px;
  font-family: Roboto;
  line-height: normal;
  box-sizing: border-box;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
  position: absolute;
  bottom: 0px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  ${({right, left, height, bottom}) => ({
    right: `${right}px`,
    left: `${left}px`,
    bottom: `${bottom}px`,
    height: `${height}px`,
  })}
`;

const Label = styled.p<{textAlign: 'left' | 'right'}>`
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;
  line-height: normal;
  box-sizing: border-box;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
  margin: 0px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  width: 50px;
  font-weight: 700;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  font-size: 0.75rem;
  color: #718096;
  ${({textAlign}) => ({'text-align': textAlign})}
`;

const Line = styled.div<{left: number; right: number; bottom: number}>`
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;
  color: rgb(26, 32, 44);
  font-size: 150px;
  font-family: Roboto;
  line-height: normal;
  box-sizing: border-box;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
  position: absolute;
  background-color: #d53f8c;
  opacity: 0.6;
  height: 1px;
  ${({right, bottom, left}) => ({
    right: `${right}px`,
    bottom: `${bottom}px`,
    left: `${left}px`,
  })}
`;

const Legend = styled.div<{
  left?: number;
  right?: number;
  flexDirection?: string;
}>`
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  text-rendering: optimizelegibility;
  color: rgb(26, 32, 44);
  font-size: 150px;
  font-family: Roboto;
  line-height: normal;
  box-sizing: border-box;
  border-width: 0px;
  border-style: solid;
  border-color: rgb(226, 232, 240);
  position: absolute;
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  ${({right, left, flexDirection}) => ({
    ...(left ? {left: `${left}px`} : {}),
    ...(right ? {right: `${right}px`} : {}),
    ...(flexDirection ? {'flex-direction': `${flexDirection}`} : {}),
  })}
`;

const Arrow = () => (
  <ArrowContainer>
    <ArrowUp />
    <ArrowLine />
    <ArrowDown />
  </ArrowContainer>
);

export const TextCropCalculator = () => {
  // const [ascender, setAscender] = useState(1900);
  // const [descender, setDescender] = useState(500);
  const [capHeight] = useState(1400);
  return (
    <Container>
      <InnerContainer>
        <InnerContainer2>
          <TextContainer1 />

          <MetricContainer bottom={12.890625} left={-50} right={0} height={150}>
            <Line left={30} right={0} bottom={150} />
            <Legend left={-20} flexDirection="row-reverse">
              <Arrow />
              <Label textAlign="right">Em square (2048)</Label>
            </Legend>
            <Line left={30} right={0} bottom={0} />
          </MetricContainer>

          <MetricContainer
            bottom={36.6211}
            left={0}
            right={-50}
            height={102.539}
          >
            <Line left={0} right={30} bottom={102.539} />
            <Legend right={-20}>
              <Arrow />
              <Label textAlign="left">Cap Height ({capHeight})</Label>
            </Legend>
          </MetricContainer>

          <MetricContainer bottom={0} left={0} right={-50} height={36.62109375}>
            <Line left={0} right={-30} bottom={36.62109375} />
            <Legend right={-80}>
              <Arrow />
              <Label textAlign="left">Descender (500)</Label>
            </Legend>
          </MetricContainer>

          <MetricContainer
            bottom={36.62109375}
            left={0}
            right={-50}
            height={139.16015625}
          >
            <Legend right={-80}>
              <Arrow />
              <Label textAlign="left">Ascender (1900)</Label>
            </Legend>
          </MetricContainer>

          <MetricContainer bottom={0} left={-50} right={0} height={175.78125}>
            <Legend left={-80} flexDirection="row-reverse">
              <Arrow />
              <Label textAlign="right">Line Height</Label>
            </Legend>
          </MetricContainer>

          <TextContainer2>Hg</TextContainer2>
        </InnerContainer2>
      </InnerContainer>
    </Container>
  );
};
