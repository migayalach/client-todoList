"use client";
import { List, NavBar } from "@/components/index";
import React from "react";
import { Breadcrumb, Layout, theme } from "antd";

const { Header, Content, Footer } = Layout;

export default function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ display: "flex", alignItems: "center", padding: 25 }}>
        <div className="demo-logo" />
        <NavBar />
      </Header>
      <Content style={{ padding: "0 15px" }}>
        <Breadcrumb
          style={{ margin: "16px 0" }}
          items={[{ title: "Home" }, { title: "List" }, { title: "App" }]}
        />
        <div
          style={{
            background: colorBgContainer,
            minHeight: "80vh",
            padding: 15,
            borderRadius: borderRadiusLG,
          }}
        >
          <List />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Created by © {new Date().getFullYear()} Code Review
      </Footer>
    </Layout>
  );
}
