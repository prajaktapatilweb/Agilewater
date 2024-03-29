export const RouteLinks = {
  id101: {link: '/adminpages', allowedRole: ['Admin', 'Employee']},
  id201: {link: '/adminpages/users/view', allowedRole: ['Admin']},
  id301: {link: '/adminpages/course/add', allowedRole: ['Admin', 'Employee']},
  id302: {link: '/adminpages/course/edit', allowedRole: ['Admin', 'Employee']},
  id303: {link: '/adminpages/course/delete', allowedRole: ['Admin']},
  id304: {link: '/adminpages/coupons', allowedRole: ['Admin']},
  id401: {link: '/adminpages/coaches/add', allowedRole: ['Admin', 'Employee']},
  id402: {link: '/adminpages/coaches/list', allowedRole: ['Admin', 'Employee']},
  id501: {link: '/adminpages/comments', allowedRole: ['Admin']},
  id601: {link: '/adminpages/quiz',   allowedRole: ['Admin']},
};
export const roterList = [
  {
    heading: 'Users',
    labels: [
      {
        linkID: 'id201',
        color: '#00ff00',
        id: 201,
        name: 'Users List',
      },
    ],
  },
  {
    heading: 'Courses',
    labels: [
      {
        linkID: 'id301',
        color: '#00ff00',
        id: 201,
        name: 'Add Course',
      },
      {
        linkID: 'id302',
        color: '#0000ff',
        id: 202,
        name: 'Edit Course',
      },
      {
        linkID: 'id303',
        color: '#ff0000',
        id: 203,
        name: 'Delete Course',
      },
      {
        linkID: 'id304',
        color: '#ff0000',
        id: 204,
        name: 'Discount Coupons',
      },
    ],
  },
  {
    heading: 'Coach',
    labels: [
      {
        linkID: 'id401',
        color: '#00ff00',
        id: 201,
        name: 'Add Coach',
      },
      {
        linkID: 'id402',
        color: '#0000ff',
        id: 202,
        name: 'Coach List',
      },
      // {
      //   linkID: 'id403',
      //   color: '#ff0000',
      //   id: 203,
      //   name: 'Delete Coach',
      // },
    ],
  },
  {
    heading: 'Comments',
    labels: [
      {
        linkID: 'id501',
        color: '#00ff00',
        id: 501,
        name: 'Approve',
      },
    ],
  },
  {
    heading: 'Quiz',
    labels: [
      {
        linkID: 'id601',
        color: '#00ff00',
        id: 501,
        name: 'Upload',
      },
    ],
  },
];
// {alias: 'closed', color: '#bf00ff', id: 204, name: 'Dead Leads'},
// {alias: 'positive', color: '#00ff00', id: 204, name: 'Hot Leads'},
// {alias: 'demoscheduled', color: '#00ffff', id: 205, name: 'Demo Scheduled'},
// {alias: 'callafterward', color: 'black', id: 206, name: 'Call Afterward'},
// {alias: 'ddd', color: '#0000ff', id: 206, name: 'Demo +Ve'},
// {alias: 'dem', color: '#FCD900', id: 207, name: 'Demo -Ve'
// ];
