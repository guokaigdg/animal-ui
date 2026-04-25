import React from 'react';
import { Phone } from '../../../src';
import {
    CodeBlock,
    ApiTable,
    ApiRow,
    sectionStyle,
    sectionTitleStyle,
    tagStyle,
    demoBodyStyle,
    labelStyle,
} from '../../tools';

const PhoneDemo: React.FC = () => (
    <div style={sectionStyle}>
        <div style={sectionTitleStyle}>
            Phone <span style={tagStyle}>手机</span>
        </div>
        <div style={labelStyle}>
            Phone 组件 — 手机界面组件。
        </div>
        <div style={{ ...demoBodyStyle, transform: 'scale(0.6)', transformOrigin: 'top left', height: 473 }}>
            <Phone />
        </div>
        <CodeBlock
            code={`import { Phone } from 'animal-island-ui';

const App = () => (
    <Phone />
);`}
        />
        <ApiTable rows={PHONE_API} />
    </div>
);

const PHONE_API: ApiRow[] = [
    { prop: 'className', desc: '自定义类名', type: 'string', defaultVal: '-' },
];

export default PhoneDemo;
