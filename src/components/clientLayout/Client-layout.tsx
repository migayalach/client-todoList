"use client";
import { NavBar } from "@/components";
import { Breadcrumb, Layout, theme } from "antd";
import React from "react";

const { Header, Content, Footer } = Layout;

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: 25,
          paddingRight: 0,
        }}
      >
        <div className="demo-logo" />
        <NavBar />
      </Header>
      <Content className="pt-5 pl-5 pr-5 pb-0">
        <div
          style={{
            background: colorBgContainer,
            minHeight: "82vh",
            padding: 15,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Created by © {new Date().getFullYear()} Code Review
      </Footer>
    </Layout>
  );
}
