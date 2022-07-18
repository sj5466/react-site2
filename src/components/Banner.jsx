import React from 'react';

function Banner() {
  return (
    <section id="bannerType" className="banner__wrap section gmarket">
            <h2 className="ir_so">배너 영역</h2>
            <div className="banner__inner">
                <div className="banner_left">
                    <h3>베이커리 브랜드 <span>뚜레쥬르</span></h3>
                    <p>매일매일, 하루 3번 매장에서 직접 빵을 굽는 일. <br/>
                        다른 베이커리에서 쉽게 도전하지 못했던 혁신적인
                        시도로<br/>
                        베이커리 시장에 첫 발을 내딛은 뚜레쥬르.</p>
                    <a href="/" className="btn">신선한 재료 이야기</a>
                </div> 
                <div className="banner_img"><span className="ir_so">직접 구운 빵</span></div>
            </div>
        </section>
  )
}

export default Banner