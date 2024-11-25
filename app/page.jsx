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
          موقع - صادق - هو منصة مبتكرة تتيح للمستخدمين إنشاء مواقع إلكترونية
          بسهولة واحترافية. يوفّر الموقع أدوات مرنة لإنشاء مواقع إلكترونية
          متنوعة، بما في ذلك المتاجر الإلكترونية، مع إمكانية حفظ أسماء المواقع
          التي يتم إنشاؤها. سواء كنت صاحب عمل صغير أو ترغب في إطلاق فكرتك عبر
          الإنترنت، فإن - صادق - هو الخيار المثالي للبدء ببساطة ودون الحاجة إلى
          خبرة تقنية كبيرة.
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
