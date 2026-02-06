import './ForYou.css';

export default function ForYou() {
  return (
    <div className="page for-you-page">
      <section className="for-you-hero">
        <div className="container">
          <h1 className="section-title">For You</h1>
          <p className="section-subtitle">
            A letter in your memory.
          </p>
        </div>
      </section>

      <section className="letter-section">
        <div className="container container-narrow">
          <article className="letter">
            <p className="letter-opening">My dearest Sejal,</p>
            <p>
              Sejal mujhe pata hai main kabhi tumhe khush nahi rakh paya , nahi kar paya utna pyar jitna tum karti thi hamesha apne mein mast , ladai , Gujjar gardi inhi sab mein laga rha 
            </p>
            <p>
             par jab aaj tum mere pass nahi ho ... mano jese sab khatam ho chuka hai ... mein tumhe kabhi jata nahi paya ki mein tumse kitna pyar karta tha , hamesha tumhe khus rakhne ki nakaam koshishe  karta rehta tha , I truly loved you sejal , and i will ... Always "
            </p>
            <p>
              bas isilye ye Site banai hai ,pehla project hai khud se banaya hua , sirf tumhare liye !! janta hu tum meri mummy ke sath upper se sab dekh rahi ho , or bohot proud bhi ho . orr abhi toh orr bhi proud krwaunga mein . tab tak ke liye bye bye !!"
            </p>
            <p className="letter-closing">
              With all my love,<br />
              <span className="letter-signature">— From <br />
                Sejal ka Aksh
              </span>
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
