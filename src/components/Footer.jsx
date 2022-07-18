import React from 'react'

function Footer() {
  return (
    <footer id="footerType" className="footer__wrap section nexon gray">
        <h2 className="ir_so">푸터 영역</h2>
        <div className="footer__inner container">
            <div className="footer__menu">
                <div className="ft_logo">
                    <a href="/"><div className="logo"><span className="ir_pm">뚜레쥬르</span></div></a>
                </div>
                <div className="icon">
                    <ul>
                        <li className="i1"><a href="/"><span className="ir_pm">페이스북</span></a></li>
                        <li className="i2"><a href="/"><span className="ir_pm">트위터</span></a></li>
                        <li className="i3"><a href="/"><span className="ir_pm">인스타</span></a></li>
                    </ul>
                </div>
                <div>
                    <h3>회사소개</h3>
                    <ul>
                        <li><a href="/">브랜드 소개</a></li>
                        <li><a href="/">글로벌 뚜레쥬르</a></li>
                        <li><a href="/">매장안내</a></li>
                        <li><a href="/">기사채용안내</a></li>
                        <li><a href="/">창업안내</a></li>
                    </ul>
                </div>
                <div>
                    <h3>공지사항</h3>
                    <ul>
                        <li><a href="/">할인혜택</a></li>
                        <li><a href="/">고객센터</a></li>
                        <li><a href="/">1:1 문의</a></li>
                        <li><a href="/">알림/소식</a></li>
                        <li><a href="/">이벤트당첨</a></li>
                    </ul>
                </div>
                <div>
                    <h3>처리방침</h3>
                    <ul>
                        <li><a href="/">이용약관</a></li>
                        <li><a href="/">개인정보처리방침</a></li>
                        <li><a href="/">위치기반서비스 이용약관</a></li>
                        <li><a href="/">이메일 무단 수집 거부</a></li>
                    </ul>
                </div>
                <div>
                    <h3>법적조치</h3>
                    <ul>
                        <li><a href="/">윤리신고센터</a></li>
                        <li><a href="/">법적고지</a></li>
                    </ul>
                </div>
            </div>
           
            <address className="footer__right">
                COPYRIGHT 2022©CJ Foodville ALL RIGHT RESERVED.
            </address>
        </div>
    </footer>
  )
}
export default Footer