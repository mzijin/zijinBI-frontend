import { listMyChartByPageUsingPOST } from '@/services/zijin/chartController';

import { useModel } from '@@/exports';
import { Avatar, Card, List, message, Result } from 'antd';
import ReactECharts from 'echarts-for-react';
import React, { useEffect, useState } from 'react';
import Search from 'antd/es/input/Search';

/**
 * 我的图表页面
 * @constructor
 */
const MyChartPage: React.FC = () => {
  // 这里写的是搜索条件
  const initSearchParams = {
    current: 1,
    pageSize: 4,
    sortField: 'createTime',
    sortOrder: 'desc',
  };

  const [searchParams, setSearchParams] = useState<API.ChartQueryRequest>({ ...initSearchParams });
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState ?? {};
  const [chartList, setChartList] = useState<API.Chart[]>();
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const loadData = async () => {
    setLoading(true);
    try {
      const res = await listMyChartByPageUsingPOST(searchParams);
      if (res.data) {
        setChartList(res.data.records ?? []);
        setTotal(res.data.total ?? 0);
        // 统一隐藏图表的 title
        if (res.data.records) {
          res.data.records.forEach((data) => {
            if (data.status === 'succeed') {
              const chartOption = JSON.parse(data.genChart ?? '{}');
              chartOption.title = undefined;
              data.genChart = JSON.stringify(chartOption);
            }
          });
        }
      } else {
        message.error('获取我的图表失败');
      }
    } catch (e: any) {
      message.error('获取我的图表失败，' + e.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [searchParams]);

  return (
    //增加搜索图表功能
    <div className="my-chart-page">
      <div>
        <Search
          placeholder="请输入图表名称"
          enterButton
          loading={loading}
          onSearch={(value) => {
            // 设置搜索条件
            setSearchParams({
              ...initSearchParams,
              name: value,
            });
          }}
        />
      </div>
      <List
        //https://ant.design/components/list-cn 样式可以在这个地方上去找
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 2,
          xl: 2,
          xxl: 2,
        }}
        // itemLayout="vertical"展示变成响应式的
        size="large"
        pagination={{
          onChange: (page, pageSize) => {
            setSearchParams({
              // 在当前的搜索条件下，返回当前的页数
              ...searchParams,
              current: page,
              pageSize,
            });
          },
          current: searchParams.current,
          pageSize: searchParams.pageSize,
          total: total,
        }}
        dataSource={chartList}
        renderItem={(item) => (
          <List.Item
            key={item.id}
            //放置图表
          >
            <Card style={{ width: '100%' }}>
              <List.Item.Meta
                avatar={<Avatar src={currentUser && currentUser.userAvatar} />}
                title={item.name}
                description={item.chartType ? '图表类型: ' + item.chartType : undefined}
              />
              <>
                {item.status === 'succeed' && (
                  <>
                    <div style={{ marginBottom: 16 }}></div>
                    <p>{'分析目标：' + item.goal}</p>
                    <div style={{ marginBottom: 16 }}></div>
                    <ReactECharts option={item.genChart && JSON.parse(item.genChart)} />
                    <p style={{ fontWeight: 'bold', color: '#0b93a1', textAlign: 'center' }}>
                      {'分析结论：' + item.genResult}
                    </p>
                  </>
                )}
                {item.status === 'failed' && (
                  <>
                    <Result
                      status="error"
                      title="图表生成失败"
                      subTitle={item.execMessage}
                    ></Result>{' '}
                  </>
                )}
                {item.status === 'running' && (
                  <>
                    <Result status="info" title="图表生成中" subTitle={item.execMessage}></Result>{' '}
                  </>
                )}
                {item.status === 'wait' && (
                  <>
                    <Result
                      status="warning"
                      title="待生成"
                      subTitle={item.execMessage ?? '当前队列生成繁忙,请耐心等待'}
                    ></Result>{' '}
                  </>
                )}
              </>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};
export default MyChartPage;
