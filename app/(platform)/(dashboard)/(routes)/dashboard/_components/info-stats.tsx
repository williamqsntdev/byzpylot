"use client";

import { Card, Metric, Text, Title, BarList, Flex, Grid, Col } from "@tremor/react";
import Chart from "./chart";
import CircleStatus from "./circle-stats";

const data = [
  {
    category: "Website",
    stat: "10,234",
  },
  {
    category: "Online Shop",
    stat: "12,543",
  },
  {
    category: "Mobile App",
    stat: "2,543",
  },
];

export default function PlaygroundPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2">
        <Col numColSpan={1} numColSpanLg={2}>
          <Card className="bg-gray-600">
            <Text>Title</Text>
            <Metric>KPI 1</Metric>
          </Card>
        </Col>
        <Card>
          <Text>Title</Text>
          <Metric>KPI 2</Metric>
        </Card>
        <Col>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 3</Metric>
          </Card>
        </Col>
        <Card>
          <Text>Title</Text>
          <Metric>KPI 4</Metric>
        </Card>
        <Card>
          <Text>Title</Text>
          <Metric>KPI 5</Metric>
        </Card>
      </Grid>
      <Chart />
    </main>
  );
}
