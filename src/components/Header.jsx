import React from 'react'

function Header() {
  return (
    <header id="headerType" className="header__wrap nexon">
        <div className="header__inner">
            <h1 className="header__logo">
                <a href="/"><div className="logo"><span  className="ir_so">뚜레쥬르</span></div></a>
            </h1>
            <nav className="header__menu">
                <h2 className="ir_so">메인 메뉴</h2>
                <ul>
                    <li><a href="/">브랜드 스토리</a></li>
                    <li><a href="/">새로워진 뚜레쥬르</a></li>
                    <li><a href="/">제품안내</a></li>
                    <li><a href="/">이벤트&멤버쉽 </a></li>
                    <li><a href="/">쇼핑몰&케이크  배달신청</a></li>
                </ul>
            </nav>
            <div className="header__member">
                <a href="/">로그인</a>
            </div>
        </div>
    </header>
  )
}

export default Header