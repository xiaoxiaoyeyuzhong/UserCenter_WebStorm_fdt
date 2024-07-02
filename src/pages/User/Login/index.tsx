import { Footer } from '@/components';
import { login } from '@/services/ant-design-pro/api';
import { AlipayCircleOutlined, LockOutlined, UserOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components';
import { Helmet, history, useModel } from '@umijs/max';
import { Alert, Tabs, message, Divider } from 'antd';
import { createStyles } from 'antd-style';
import React, { useState, useEffect } from 'react';
import { flushSync } from 'react-dom';
import Settings from '../../../../config/defaultSettings';

const useStyles = createStyles(({ token }) => ({
  action: {
    marginLeft: '8px',
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '24px',
    verticalAlign: 'middle',
    cursor: 'pointer',
    transition: 'color 0.3s',
    '&:hover': {
      color: token.colorPrimaryActive,
    },
  },
  lang: {
    width: 42,
    height: 42,
    lineHeight: '42px',
    position: 'fixed',
    right: 16,
    borderRadius: token.borderRadius,
    ':hover': {
      backgroundColor: token.colorBgTextHover,
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'auto',
    backgroundImage: "url('https://mdn.alipayobjects.com/yuyan_qk0oxh/afts/img/V-_oS6r-i7wAAAAAAAAAAAAAFl94AQBr')",
    backgroundSize: '100% 100%',
  },
}));

const ActionIcons = () => {
  const { styles } = useStyles();
  return (
    <>
      <AlipayCircleOutlined key="AlipayCircleOutlined" className={styles.action} />
      <TaobaoCircleOutlined key="TaobaoCircleOutlined" className={styles.action} />
      <WeiboCircleOutlined key="WeiboCircleOutlined" className={styles.action} />
    </>
  );
};

const Lang = () => {
  const { styles } = useStyles();
  return null; // 确保返回null而不是空对象
};

const LoginMessage: React.FC<{ content: string }> = ({ content }) => (
  <Alert
    style={{ marginBottom: 24 }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = () => {
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<string>('account');
  const { initialState, setInitialState } = useModel('@@initialState');
  const { styles } = useStyles();

  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  const handleSubmit = async (values: API.LoginParams) => {
    try {
      // 登录
      const user = await login({ ...values, type });
      if (user) {
        message.success('登录成功！');
        await fetchUserInfo();
        // 重定向到主页或用户中心
        history.push('/');
        return;
      }
      // 如果登录失败，设置用户登录状态
      setUserLoginState(user);
    } catch (error) {
      message.error('登录失败，请重试！');
    }
  };

  // const { status, type: loginType } = userLoginState;
  //
  // useEffect(() => {
  //   if (status === 'ok') {
  //     // 用户登录成功，重定向到指定页面
  //     history.push('/');
  //   }
  // }, [status]);

  return (
    <div className={styles.container}>
      <Helmet>
        <title>{'登录'} - {Settings.title}</title>
      </Helmet>
      <Lang />
      <div style={{ flex: '1', padding: '32px 0' }}>
        <LoginForm
          contentStyle={{ minWidth: 280, maxWidth: '75vw' }}
          logo={<img alt="logo" src="/img/userCenter_fdt_logo.jpg" />}
          title="用户中心_田"
          subTitle="用户登录界面"
          initialValues={{ autoLogin: true }}
          onFinish={async (values) => {
            await handleSubmit(values as API.LoginParams);
          }}
        >
          <Tabs activeKey={type} onChange={setType} centered items={[{ key: 'account', label: '账户密码登录' }]} />
          {status === 'error' && loginType === 'account' && <LoginMessage content={'错误的账号和密码'} />}
          {type === 'account' && (
            <>
              <ProFormText
                name="userAccount"
                fieldProps={{ size: 'large', prefix: <UserOutlined /> }}
                placeholder={'请输入账号'}
                rules={[{ required: true, message: '账号是必填项！' }]}
              />
              <ProFormText.Password
                name="userPassword"
                fieldProps={{ size: 'large', prefix: <LockOutlined /> }}
                placeholder={'请输入密码'}
                rules={[
                  { required: true, message: '密码是必填项！' },
                  { min: 8, type: 'string', message: '密码长度不小于8！' },
                ]}
              />
            </>
          )}
          <div style={{ marginBottom: 24 }}>
            <ProFormCheckbox noStyle name="autoLogin">自动登录</ProFormCheckbox>
            <Divider type="vertical" />
            <a
              style={{ float: 'right' }}
              href={'/user/register'}
              target="_blank"
              rel={'noreferrer'}
            >
              注册
            </a>
          </div>
        </LoginForm>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
