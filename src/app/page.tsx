import Image from "next/image";
import defualt from "../image/image.png";
import byeoundong from "../image/byeundong.png";
import profile from "../image/profile.png";
export default function Home() {
  return (
    <div>
      <div className="Left">
        <h1>윤태식</h1>
        <Image
          src={profile}
          alt="semple"
          width={200}
          height={200}
          className="border-radius"
        />

        <div className="Right-image">
          <div className="text-left">
            <li>태식</li>
            <li>INTP</li>
            <li>어저고 저저꼬 여고생</li>
            <li>만화작가</li>
          </div>
        </div>
      </div>

      <div className="Right">
        <h1>연재작</h1>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <Image
                    src={defualt}
                    alt="semple"
                    width={100}
                    height={100}
                    className="border-radius"
                  />
                </td>
                <td>변동</td>
              </tr>
              <tr>
                <td>
                  <Image
                    src={byeoundong}
                    alt="변동일지"
                    width={100}
                    height={100}
                    className="border-radius"
                  />
                </td>
                <td>변동일지</td>
              </tr>
              <tr>
                <td>
                  <Image
                    src={defualt}
                    alt="semple"
                    width={100}
                    height={100}
                    className="border-radius"
                  />
                </td>
                <td width={300}>???</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
