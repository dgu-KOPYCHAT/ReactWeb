import React from "react";
import { Link } from "react-router-dom";
import * as c from "./TopBarCSS.js";
import LogoImage from "../images/kopychat.png";
import SearchIcon from "../images/search_icon_gray.png";

const TopBar = () => {
	return (
		<div>
			<c.TopBar>
				<c.LeftSide>
					<Link to="/" style={{ textDecoration: "none" }}>
						<c.Logo>
							<c.LogoImage src={LogoImage}></c.LogoImage>
							<c.LogoText>KOPYCHAT</c.LogoText>
						</c.Logo>
					</Link>
					<Link to="/quizsearch" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<c.MenuText>문제</c.MenuText>
						</c.TopMenu>
					</Link>
					<Link
						to="/quizlist/main"
						style={{ textDecoration: "none" }}
					>
						<c.TopMenu>
							<c.MenuText>문제집</c.MenuText>
						</c.TopMenu>
					</Link>
					<Link to="/editor" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<c.MenuText>에디터</c.MenuText>
						</c.TopMenu>
					</Link>
					<Link to="/grouplist" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<c.MenuText>그룹</c.MenuText>
						</c.TopMenu>
					</Link>
					<c.TopMenu>
						<c.SearchIconImage src={SearchIcon}></c.SearchIconImage>
					</c.TopMenu>
				</c.LeftSide>
				<c.RightSide>
					<Link to="/login" style={{ textDecoration: "none" }}>
						<c.LoginMenu>
							<c.MenuText>로그인</c.MenuText>
						</c.LoginMenu>
					</Link>
					<Link to="/user" style={{ textDecoration: "none" }}>
						<c.TopMenu>
							<c.MenuText>마이페이지</c.MenuText>
						</c.TopMenu>
					</Link>
				</c.RightSide>
			</c.TopBar>
			<c.HrLine />
		</div>
	);
};

export default TopBar;