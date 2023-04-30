import './App.css';
import lupa from './images/lupa.png'
import basket from './images/basket.png'
import iphone from './images/iphone.png'
import notebook from './images/notebook.png'
import microphone from './images/microphone.png'
import buds from './images/buds.png'
import xbox from './images/xbox.png'
import mouse from './images/mouse.png'
import phone_icon from './images/phone_icon.png'
import notebook_icon from './images/notebook_icon.png'
import microphone_icon from './images/microphone_icon.png'
import buds_icon from './images/buds_icon.png'
import xbox_icon from './images/xbox_icon.png'
import mouse_icon from './images/mouse_icon.png'
import iDontKnow from './images/xz.png'


function App() {
  return (
    <div className="App">
      <div className="marcet">
        <header className="marcet__header">
          <nav className="marcet__header__navigation">
            <div className="marcet__header__block">
              <h1 className="marcet__header__block--text">MARCET</h1>
            </div>
            <div className="marcet__header__search"> <input placeholder='Поиск' className="marcet__header__search--icon" /><img src={lupa} alt='Поиск' /></div>
            <div className="marcet__header__basket"><img alt='корзина' src={basket} /></div>
          </nav>
        </header>
        <main className="marcet__body">
          <aside className="marcet__body__vidget">
            <div className="marcet__body__vidget__icon">
              <a target="_blank" href='https://market.yandex.ru/product--smartfon-apple-iphone-x/1732181846?glfilter=14871214%3A15277521_101807241786&glfilter=23476910%3A26684950_101807241786&glfilter=25879492%3A25879610_101807241786&cpa=1&sku=101807241786&resale_goods=resale_resale&resale_goods_condition=resale_well'>
                <div className="marcet__body__vidget__icon--tovar"><img src={iphone} alt="Realme GT neo 2" /></div>
              </a>
              <div className="marcet__body__vidget__icon--sell">16 000</div>
            </div>
            <div className="marcet__body__vidget__icon">
              <a target="_blank" href="https://bootcomp.ru/8-ustroystva-vvoda-cid8/klaviatury-myshi-i-komplekty-cid87/myshi-besprovodnye-cid178/besprovodnaya-mysh-logitech-g305-lightspeed-black-14525">
                <div className="marcet__body__vidget__icon--tovar"><img src={mouse} alt="Logitech g405" /></div>
              </a>
              <div className="marcet__body__vidget__icon--sell">3 300</div>
            </div>
            <div className="marcet__body__vidget__icon">
              <a target="_blank" href="https://indexiq.ru/product/apple-macbook-pro-13-m1-256gb-silver-myda2/">
                <div className="marcet__body__vidget__icon--tovar"><img src={notebook} alt="MacOS M1" /></div>
              </a>
              <div className="marcet__body__vidget__icon--sell">89 000</div>
            </div>
            <div className="marcet__body__vidget__icon">
              <a target="_blank" href="https://market.yandex.ru/product--kompiuternaia-garnitura-logitech-g-g332-g332-se/402901000?clid=1601&utm_source=yandex&utm_medium=search&utm_campaign=ymp_promo_1p_sale_indx_bko_dyb_search_rus&utm_term=6368403%7C100623298233&utm_term=none&utm_content=cid%3A75106342%7Cgid%3A4936037504%7Caid%3A12259965830%7Cph%3A2539394%7Cpt%3Apremium%7Cpn%3A2%7Csrc%3Anone%7Cst%3Asearch%7Ccgcid%3A0&sku=100623298233&cpa=1">
                <div className="marcet__body__vidget__icon--tovar"><img src={buds} alt="Logitech buds" /></div>
              </a>
              <div className="marcet__body__vidget__icon--sell">5 800</div>
            </div>
            <div className="marcet__body__vidget__icon">
              <a target="_blank" href="https://www.audiomania.ru/studiyniy_mikrofon/behringer/behringer_tm1.html?yclid=6814448062067434366&utm_source=yandex&utm_medium=cpc&utm_campaign=y_search_yuzhnyj_SHOPPING_professionalnoe_audio_text_n20&utm_term=&utm_content=4997813227#82613">
                <div className="marcet__body__vidget__icon--tovar "><img src={microphone} alt="micro" /></div>
              </a>
              <div className="marcet__body__vidget__icon--sell">13 100</div>
            </div>
            <div className="marcet__body__vidget__icon">
              <a target="_blank" href="https://sbermegamarket.ru/catalog/details/igrovaya-pristavka-xbox-series-s-512gb-100027293033/">
                <div className="marcet__body__vidget__icon--tovar"><img src={xbox} alt="XBox" /></div>
              </a>
              <div className="marcet__body__vidget__icon--sell">18 000</div>
            </div>
            <div className="marcet__body__vidget__icon">
              <a target="_blank" href="https://www.pngwing.com/ru/free-png-phmwz">
                <div className="marcet__body__vidget__icon--tovar"><img class='answ' src={iDontKnow} alt="?" /></div>
              </a>
              <div className="marcet__body__vidget__icon--sell">?</div>
            </div>
            <div className="marcet__body__vidget__icon">
              <a target="_blank" href="https://www.pngwing.com/ru/free-png-phmwz">
                <div className="marcet__body__vidget__icon--tovar"><img class='answ' src={iDontKnow} alt="?" /></div>
              </a>
              <div className="marcet__body__vidget__icon--sell">?</div>
            </div>
            <div className="marcet__body__vidget__icon">
              <a target="_blank" href="https://www.pngwing.com/ru/free-png-phmwz">
                <div className="marcet__body__vidget__icon--tovar"><img class='answ' src={iDontKnow} alt="?" /></div>
              </a>
              <div className="marcet__body__vidget__icon--sell">?</div>
            </div>
            <div className="marcet__body__vidget__icon">
              <a target="_blank" href="https://www.pngwing.com/ru/free-png-phmwz">
                <div className="marcet__body__vidget__icon--tovar"><img class='answ' src={iDontKnow} alt="?" /></div>
              </a>
              <div className="marcet__body__vidget__icon--sell">?</div>
            </div>
            <div className="marcet__body__vidget__icon">
              <a target="_blank" href="https://www.pngwing.com/ru/free-png-phmwz">
                <div className="marcet__body__vidget__icon--tovar"><img class='answ' src={iDontKnow} alt="?" /></div>
              </a>
              <div className="marcet__body__vidget__icon--sell">?</div>
            </div>
            <div className="marcet__body__vidget__icon">
              <a target="_blank" href="https://www.pngwing.com/ru/free-png-phmwz">
                <div className="marcet__body__vidget__icon--tovar"><img class='answ' src={iDontKnow} alt="?" /></div>
              </a>
              <div className="marcet__body__vidget__icon--sell">?</div>
            </div>
            <div className="marcet__body__vidget__icon">
              <a target="_blank" href="https://www.pngwing.com/ru/free-png-phmwz">
                <div className="marcet__body__vidget__icon--tovar"><img class='answ' src={iDontKnow} alt="?" /></div>
              </a>
              <div className="marcet__body__vidget__icon--sell">?</div>
            </div>
            <div className="marcet__body__vidget__icon">
              <a target="_blank" href="https://www.pngwing.com/ru/free-png-phmwz">
                <div className="marcet__body__vidget__icon--tovar"><img class='answ' src={iDontKnow} alt="?" /></div>
              </a>
              <div className="marcet__body__vidget__icon--sell">?</div>
            </div>
            <div className="marcet__body__vidget__icon">
              <a target="_blank" href="https://www.pngwing.com/ru/free-png-phmwz">
                <div className="marcet__body__vidget__icon--tovar"><img class='answ' src={iDontKnow} alt="?" /></div>
              </a>
              <div className="marcet__body__vidget__icon--sell">?</div>
            </div>

          </aside>
          <siction className="marcet__body__menu">
            <div className="marcet__body__menu__category"><img src={phone_icon} alt="Realme GT neo 2" /></div>
            <div className="marcet__body__menu__category"><img src={mouse_icon} alt="Logitech g405" /></div>
            <div className="marcet__body__menu__category"><img src={notebook_icon} alt="MacOS M1" /></div>
            <div className="marcet__body__menu__category"><img src={buds_icon} alt="Logitech buds" /></div>
            <div className="marcet__body__menu__category"><img src={microphone_icon} alt="micro" /></div>
            <div className="marcet__body__menu__category"><img src={xbox_icon} alt="XBox" /></div>
          </siction>
        </main>
      </div>
    </div>
  );
}

export default App;
