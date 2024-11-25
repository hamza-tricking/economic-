"use client";
import Image from "next/image";
import Start from "../public/images/startFont";
import "../styles/start.css";

export default function Home() {
  return (
    <div>
      <div className="byNow">
        <button> اطلب الآن</button>
      </div>
      <div className="slogon">
        <h1> "العاب مذهلة للأطفال، مرح بلا حدود!"</h1>
      </div>

      <div className="start">
        <video className="background-video" autoPlay muted loop>
          <source src="/images/21536-318978190_small.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Start />
      </div>
      <div className="description">
        <h1>عن الموقع</h1>

        <p>
          مرحبًا بك في موقعنا المتخصص في بيع ألعاب ودمى الأطفال! نحن نقدم مجموعة
          واسعة من الألعاب التعليمية والترفيهية للأطفال من جميع الأعمار. من
          الألعاب المبدعة التي تنمي مهاراتهم العقلية، إلى الألعاب التي تحفز
          خيالهم وتساعدهم على استكشاف العالم من حولهم. ستجد لدينا ألعاباً تناسب
          مختلف الأذواق والاهتمامات، بالإضافة إلى هدايا رائعة للأطفال.
        </p>
      </div>
      <div>
        <ul className="products">
          <li className="a">
            <Image
              width={170}
              height={170}
              src="/images/svg products/Mask group.png"
              alt="as"
            />
          </li>
          <li>
            {" "}
            <Image
              width={170}
              height={170}
              src="/images/svg products/Screenshot_9.png"
              alt="as"
            />{" "}
          </li>
          <li>
            {" "}
            <Image
              width={170}
              height={170}
              src="/images/svg products/Screenshot_8.png"
              alt="as"
            />{" "}
          </li>
          <li>
            {" "}
            <Image
              width={170}
              height={170}
              src="/images/svg products/Screenshot_7.png"
              alt="as"
            />{" "}
          </li>
          <li className="c">
            {" "}
            <Image
              width={170}
              height={170}
              src="/images/svg products/Screenshot_5.png"
              alt="as"
            />{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
