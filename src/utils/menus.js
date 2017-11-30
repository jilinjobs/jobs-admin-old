
import pages from './pages'

const datas = [
  {
    title: '导航1',
    icon: 'location',
    children: [
      {
        title: '选项1',
      },
      {
        title: '选项2',
        path: '/opt2'
      },
      {
        title: '选项3',
        url: 'http://www.baidu.com',
        target: '_self'
      },
      {
        title: '选项4',
        url: 'http://www.baidu.com',
        target: '_blank'
      },
    ]
  },
  {
    title: '导航2',
    icon: 'setting',
    children: [
      {
        title: '页面1',
        icon: 'menu',
        path: '/page1',
        page: 'page1'
      },
      {
        title: '页面2',
        icon: 'menu',
        path: '/page2',
        page: 'page2'
      },
    ]
  },
  {
    title: '导航3',
    icon: 'setting',
    children: [

    ]
  },
  {
    title: '错误页',
    icon: 'menu',
    children: [
      {
        title: '403',
        icon: 'menu',
        path: '/page403',
        page: pages.Error403,
      },
      {
        title: '404',
        icon: 'menu',
        path: '/page404',
        page: pages.Error404,
      },
      {
        title: '500',
        icon: 'menu',
        path: '/page500',
        page: pages.Error500,
      },
    ]
  },
];

const MapMenu = (item)=>({
    title: item.title, 
    options: {icon: item.icon, path: item.path, url: item.url, target: item.target},
    children: (item.children||[]).map(MapMenu),
  })

/**
 * 
 * @param {*} catalog 父节点的路径信息
 */  
const MapRoute = (catalog=[])=> (item)=>[{
      path: item.path, 
      component: typeof(item.page)==='string'?pages[item.page]:item.page || pages.Error404,
      meta: {catalog: catalog.concat(item.title)},
    }
  ].concat(
      (item.children||[]).map(MapRoute(catalog.concat(item.title)))
                        .reduce((p,c)=>p.concat(c),[])
                        .filter(p=>p.path)
  )



export const menus = datas.map(MapMenu)
export const routes = datas.map(MapRoute())        
                          .reduce((p,c)=>p.concat(c),[])
                          .filter(p=>p.path)