import React, { useState } from 'react';
import { Loading as LoadingComponent, Button } from '../../../src';
import { CodeBlock, ApiTable, ApiRow, sectionStyle, sectionTitleStyle, tagStyle, demoBodyStyle, labelStyle } from '../../tools';

const LoadingDemo: React.FC = () => {
    const [active, setActive] = useState(true);

    return (
        <div style={sectionStyle}>
            <div style={sectionTitleStyle}>
                Loading <span style={tagStyle}>加载动画</span>
            </div>
            <div style={labelStyle}>
                动森风格小岛 Loading 动画组件，带有漂浮的小岛、摇曳的树叶和游动的鱼。
            </div>
            <div style={{ ...demoBodyStyle }}>
                <LoadingComponent active={active} style={{ height: 800 }} />
            </div>
            <div style={{ marginTop: 16 }}>
                <Button type={active ? 'default' : 'primary'} onClick={() => setActive(!active)}>
                    {active ? '关闭 Loading' : '开启 Loading'}
                </Button>
            </div>
            <CodeBlock
                code={`import React, { useState } from 'react';
import { Loading } from 'animal-island-ui';

const App = () => {
    const [active, setActive] = useState(true);
    return (
        <div>
            <Loading active={active} />
            <button onClick={() => setActive(!active)}>
                {active ? '关闭 Loading' : '开启 Loading'}
            </button>
        </div>
    );
};`}
            />
            <ApiTable rows={LOADING_API} />
        </div>
    );
};

const LOADING_API: ApiRow[] = [
    { prop: 'active', desc: '是否显示加载动画', type: 'boolean', defaultVal: 'true' },
    { prop: 'className', desc: '自定义类名', type: 'string', defaultVal: '-' },
    { prop: 'style', desc: '自定义样式', type: 'CSSProperties', defaultVal: '-' },
];

export default LoadingDemo;