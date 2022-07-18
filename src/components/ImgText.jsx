import React from 'react';

function ImgText() {
  return (
  <section id="imgTextType" className="imgText__wrap section nexon">
      <h2 className="ir_so">할인 혜택</h2>
      <div className="imgText__inner container">
          <div className="txt">
              <h3 className="title">이달의 할인 혜택</h3>
              <p className="desc">
                  뚜레쥬르만의 다양한 할인 혜택을 받아 보세요.
              </p>
          </div><br/>
          <div className="img bg1"><a href="/"><span className="ir_so">세포들아 여름을 부탁해! 올 여름은 크림 도넛으로!</span></a></div>
          <div className="img bg2"><a href="/"><span className="ir_so">요기요로 주문하면 뚜레쥬르 4천원할인</span></a></div>
          <div className="img bg3"><a href="/"><span className="ir_so">지금 배달의 민족을 주문하면 4천원 할인</span></a></div>
      </div>
  </section>
  )
}

export default ImgText