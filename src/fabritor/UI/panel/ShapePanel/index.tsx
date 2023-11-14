import { useContext } from 'react';
import { Flex } from 'antd';
import Title from '@/fabritor/components/Title';
import LineTypeList from './line-type-list';
import { drawLine } from '@/editor/line';
import { GloablStateContext } from '@/context';

export default function ShapePanel () {
  const { setActiveObject } = useContext(GloablStateContext);

  const addLine = (item) => {
    let line;
    if (item.key.startsWith('arrow')) {
      line = drawLine({
        ...item.options,
        type: 'arrow-line'
      });
    } else {
      drawLine(item.options || {});
    }
    setActiveObject(line);
  }

  return (
    <div className="fabritor-panel-text-wrapper">
      <Title>线条</Title>
      <Flex gap={10} wrap="wrap">
        {
          LineTypeList.map(item => (
            <div
              key={item.key}
              onClick={() => { addLine(item) }}
              className="fabritor-panel-shape-item"
            >
              <img src={item.svg} alt="" style={{ width: 56, height: 56 }} />
            </div>
          ))
        }
      </Flex>
      <Title>形状</Title>
    </div>
  )
}