const defaultState = [
  {
    id: 1,
    name: "Menu Item 1",
    children: [
      {
        id: 11,
        name: "Menu Item 11",
        children: []
      },
      {
        id: 12,
        name: "Menu Item 12",
        children: [
          {
            id: 121,
            name: "Menu Item 121",
            children: []
          },
          {
            id: 122,
            name: "Menu Item 122",
            children: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Menu Item 2",
    children: []
  },
  {
    id: 3,
    name: "Menu Item 3",
    children: [
      {
        id: 31,
        name: "Menu Item 31",
        children: [
          {
            id: 311,
            name: "Menu Item 311",
            children: []
          },
          {
            id: 312,
            name: "Menu Item 312",
            children: []
          },
          {
            id: 313,
            name: "Menu Item 313",
            children: []
          }
        ]
      },
      {
        id: 32,
        name: "Menu Item 32",
        children: []
      },
      {
        id: 33,
        name: "Menu Item 33",
        children: [
          {
            id: 331,
            name: "Menu Item 331",
            children: []
          },
          {
            id: 332,
            name: "Menu Item 332",
            children: []
          },
          {
            id: 333,
            name: "Menu Item 333",
            children: [
              {
                id: 3331,
                name: "Menu Item 3331",
                children: []
              },
              {
                id: 3332,
                name: "Menu Item 3332",
                children: []
              },
              {
                id: 3333,
                name: "Menu Item 3333",
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Menu Item 4",
    children: []
  },
  {
    id: 5,
    name: "Menu Item 5",
    children: []
  }
];

const defaultState2 = [
  {
    id: 4,
    name: "Menu Item 4",
    children: []
  },
  {
    id: 5,
    name: "Menu Item 5",
    children: []
  }
];

const defaultState3 = [
  {
    id: 4,
    name: "Menu Item 4",
    children: [
      {
        id: 41,
        name: "Menu Item 41",
        children: []
      },
      {
        id: 42,
        name: "Menu Item 42",
        children: [
          {
            id: 5,
            name: "Menu Item 5",
            children: []
          }
        ]
      }
    ]
  }
];

export default defaultState;
