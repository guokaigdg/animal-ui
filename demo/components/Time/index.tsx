import React from 'react';
import { Time as TimeComponent } from '../../../src';
import { CodeBlock, ApiTable, ApiRow, sectionStyle, sectionTitleStyle, tagStyle, demoBodyStyle, labelStyle } from '../../tools';

const TimeDemo: React.FC = () => (
    <div style={sectionStyle}>
        <div style={sectionTitleStyle}>
            Time <span style={tagStyle}>时间</span>
        </div>
        <div style={labelStyle}>
            Time 组件 — 动森经典 HUD 风格的时间显示组件，实时更新时间，支持星期、日期和时间显示。
        </div>  
        <div style={demoBodyStyle}>
            <TimeComponent />
        </div>
        <CodeBlock
            code={`import { Time } from 'animal-island-ui';

const App = () => (
    <Time />
);`}
        />
        <ApiTable rows={TIME_API} />
    </div>
);

const TIME_API: ApiRow[] = [
    { prop: 'className', desc: '自定义类名', type: 'string', defaultVal: '-' },
];

export default TimeDemo;
