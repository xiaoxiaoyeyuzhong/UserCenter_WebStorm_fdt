import {AvatarDropdown, AvatarName, Footer, Question} from '@/components';
// import {currentUser as queryCurrentUser} from '@/services/ant-design-pro/api';
import {currentUser as queryCurrentUser} from '@/services/ant-design-pro/api';
import {LinkOutlined} from '@ant-design/icons';
import type {Settings as LayoutSettings} from '@ant-design/pro-components';
import {SettingDrawer} from '@ant-design/pro-components';
import type {RunTimeLayoutConfig} from '@umijs/max';
import {history, Link} from '@umijs/max';
import defaultSettings from '../config/defaultSettings';
import {RequestConfig} from "@@/plugin-request/request";
// import {prefix} from "stylis";
const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';
const NO_NEED_WHITE_LIST = ['/user/register',loginPath]
// 现在直接删除了白名单里的loginPath，但是这样会使进入登录页时再查用户信息，看看能否修改
// const NO_NEED_WHITE_LIST = ['/user/register']
/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
/**
 * 无需用户登录态的页面
 */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: API.BaseResponse<API.CurrentUser>;
  loading?: boolean;
  // fetchUserInfo?: () => Promise<API.CurrentUser | undefined>;
  fetchUserInfo?: () => Promise<API.BaseResponse<API.CurrentUser> | undefined>;
}> {
  const fetchUserInfo = async () => {
    // 加入白名单，如果路径在白名单里，不需要获取用户信息和跳转到登录页。
    // const { location } = history;

    // if (NO_NEED_WHITE_LIST.includes(history.location.pathname)) {
    //   // alert("进入app.tsx，白名单逻辑1")
    //   return undefined;
    // }
    try {
      const user = await queryCurrentUser({
        skipErrorHandler: true,
      });
      return user;
    } catch (error) {
      history.push(loginPath);
    }
    return undefined;
  };

  // 如果是不需要登录态的页面，不执行
  if (NO_NEED_WHITE_LIST.includes(history.location.pathname)) {
    // alert("进入app.tsx，白名单逻辑2")
    return {
      // @ts-ignore
      fetchUserInfo,
      settings: defaultSettings as Partial<LayoutSettings>,
    };
  }
  const currentUser = await fetchUserInfo();
  return {
    // @ts-ignore
    fetchUserInfo,
    currentUser,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState, setInitialState }) => {
  return {
    actionsRender: () => [<Question key="doc" />],
    avatarProps: {
      src: initialState?.currentUser?.avatarUrl,
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    // rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: initialState?.currentUser?.username,
    },
    footerRender: () => <Footer />,
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && !NO_NEED_WHITE_LIST.includes(location.pathname)) {
        // alert("进入app.tsx，白名单逻辑3")
        history.push(loginPath);
      }
    },
    bgLayoutImgList: [
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/D2LWSqNny4sAAAAAAAAAAAAAFl94AQBr',
        left: 85,
        bottom: 100,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/C2TWRpJpiC0AAAAAAAAAAAAAFl94AQBr',
        bottom: -68,
        right: -45,
        height: '303px',
      },
      {
        src: 'https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/F6vSTbj8KpYAAAAAAAAAAAAAFl94AQBr',
        bottom: 0,
        left: 0,
        width: '331px',
      },
    ],
    links: isDev
      ? [
          <Link key="openapi" to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
        ]
      : [],
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          {isDev && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )}
        </>
      );
    },
    ...initialState?.settings,
  };
};

// @ts-ignore
/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
// export const request = {
//    ...errorConfig,
// };



export const request: RequestConfig = {
  // timeout: 10000,
  // requestInterceptors: [
  //   prefix("http://localhost:8080/api") // 传递prefix函数需要的参数
  // ],
  // prefix: "http://localhost:8080"
};
