import React from 'react'

function Image() {
  return (
    <section id="imageType" className="image__wrap section nexon"> 
        <div className="image__inner container">
            <h2>매일매일(Tous Les Jours), <br/>
                매장에서 직접 굽는 <span>신선한 베이커리</span></h2>
            <p>뚜레쥬르는(Tous Les Jours - 프랑스어로 ‘매일매일’이라는 뜻)" 그 이름의 의미처럼
                매일매일 매장에서 직접 굽는 신선함을 가장 큰 가치로 하는 베이커리 입니다.
                1997년 구리교문에 처음 매장을 연 뚜레쥬르는,
                그 시절 공장에서 양산빵을 납품 받던 다른 베이커리들과 달리,
                하루 3번 매장에서 갓 구운 신선한 빵을 제공하며
                국내 베이커리 업계에 새로운 변화의 바람을 일으켰습니다.
                뚜레쥬르 매장에 들어서는 순간 감도는 갓 구워낸 빵의 고소하고 달큰한 향은
                대량 생산에 급급했던 여타의 베이커리 브랜드와는 분명히 다른 차별점이 되었습니다.</p>
            <article className="image">
                <div className="image__header">
                    <figure className="image__figure">
                        <img src="./assets/img/image_01.jpg" alt="신선한 베이커리뚜레주르"/>
                    </figure>
                </div>
                <div className="image__body">
                    <h3 className="image__title">뚜레쥬르</h3>
                    <p className="image__desc">매일 매일 신선한 베이커리</p>
                    <a href="/" className="image__btn">자세히 보기</a>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Image