"A table is a good way to showcase a large amount of information which has a variety of columns and data to show for each entity. A table should be used when multiple metrics and categories need to be presented together, and accurate lookup of the data values is more important that showing patterns in the data." Polaris

"Use tables to logically structure content in a grid to make it easier to see relationships and to facilitate understanding. Tables are structured in HTML, so the component only provides structure and content alignment." Atlassian



Default

```js
const sampleData = require('./sampleData').default;
<div>
  <div className="mb5">
    <Table
      schema={sampleData.defaultSchema}
      items={sampleData.items}
    />
  </div>
</div>
```

Custom components

```js
const sampleData = require('./sampleData').default;
// Schema example:
// {
//   properties: {
//     name: {
//       type: 'string',
//       title: 'Name',
//     },
//     email: {
//       type: 'string',
//       title: 'Email',
//       width: 35, (this should be a % of containers width, default is 25%)
//     },
//     color: {
//       type: 'object',
//       title: 'Color',
//       cellRenderer: ({ cellData }) => {
//         return (
//           <div className="mh4">
//             <Badge bgColor={cellData.color} color="#fff">{cellData.label}</Badge>
//           </div>
//         )
//       },
//     },
//   },
// }
<div>
  <div className="mb5">
    <Table
      schema={sampleData.customSchema}
      items={sampleData.items}
      indexColumn
    />
  </div>
</div>
```

