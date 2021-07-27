import React from 'react';
import { Card, Alert, Typography } from 'antd';

export type WelcomeProps = {
    onLoad?: (value?: string) => void;
    onVisibleChange?: (b: boolean) => void;
    visible?: boolean;
    value?: string;
  };


const Welcome: React.FC<WelcomeProps> =()=> {
    return (
                <Typography.Text strong>
                    <a
                        href="https://procomponents.ant.design/components/table"
                        rel="noopener noreferrer"
                        target="__blank"
                    >
                        <h1>你好 React</h1>
                    </a>
                </Typography.Text>
    );
};
export default Welcome;
