import 'antd/dist/antd.less';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Empty } from 'antd';

storiesOf('Components/Ant Design/Empty', module).add('simple', () => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />, {
          docs: {
            page: () => (
              <>
                Visit Ant Design website for full
                &nbsp;
                <a href="https://ant.design/components/empty/" target="_blank">
                  documentation on Empty component
                </a>.
              </>
            ) }
        });