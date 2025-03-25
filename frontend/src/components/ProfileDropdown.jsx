import React, { useState } from "react";
import profileIcon from "../assets/profile.jpg";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={styles.profileContainer}>
      {/* 用户头像（点击展开下拉菜单） */}
      <div onClick={() => setIsOpen(!isOpen)} style={styles.profileIcon}>
        <img 
          src={profileIcon}  // 替换为用户头像 URL
          alt="User" 
          style={styles.avatar} 
        />
      </div>

      {/* 下拉菜单 */}
      {isOpen && (
        <div style={styles.dropdownMenu}>
          <ul style={styles.menuList}>
            <li><a href="/profile" style={styles.menuItem}>个人中心</a></li>
            <li><a href="/settings" style={styles.menuItem}>设置</a></li>
            <li><a href="/logout" style={styles.menuItem}>退出登录</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

// 样式
const styles = {
  profileContainer: {
    position: "relative",
    cursor: "pointer",
  },
  profileIcon: {
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "2px solid white",
  },
  dropdownMenu: {
    position: "absolute",
    top: "50px",
    right: 0,
    backgroundColor: "white",
    color: "black",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
  },
  menuList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  menuItem: {
    display: "block",
    padding: "10px 20px",
    textDecoration: "none",
    color: "#333",
    fontSize: "14px",
    transition: "background 0.3s",
  }
};

export default ProfileDropdown;
