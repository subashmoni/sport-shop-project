import React from "react";
// import './adminDashbord1.css';




export function Dashbord1(){
  // var noti = document.querySelector('.log');
  // var select = document.querySelector('.select');
  // var button = document.getElementById('button');
  // for(but of button){
  //     but.addEventListener('click',(e)=>{
  //         var add = number(noti.getAttribute(data-count) || 0);
  //         noti.setAttribute('data-count',add + 1);
  //         noti.classList.add('zero');
  //     })
  
  //     var parent = target.parentNode;
  //     var clone = parent.cloneNode(true);
  //     select.appendChild(clone);
  //     clone.lastElementChild.innerText = "Buy-Now";
  //     if(clone){
  //         noti.onclick =()=>{
  //             select.classList.toggle('display');
  //         }
  //     }
  // var image = target.parentNode.querySelector('img');
  // var span = target.parentNode.querySelector('span');
  // var s_image = image.cloneNode(false);
  // span.appendChild(s_image);
  // span.classList.add('active');
  // setTimeout(()=>{
  //     span.removeChild(s_image);
  // span.classList.remove('active');
  // }, 500);
  // }

var noti = document.querySelector('.log');
var select = document.querySelectorAll('.select');
var buttons = document.querySelectorAll('#button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        var add = parseInt(noti.getAttribute('data-count')) || 0;

        add++;
        noti.setAttribute('data-count', add);
        noti.classList.add('zero');
    });

   var parent = button.parentNode;

    var clone = parent.cloneNode(true);

    select.forEach((s) => {
        s.appendChild(clone);

        clone.lastElementChild.innerText = "Buy-Now";
    });

    noti.onclick = () => {
        select.forEach((s) => {
            s.classList.toggle('display');
        });
    };

    var image = parent.querySelector('img');
    var span = parent.querySelector('span');
    var s_image = image.cloneNode(false);

    span.appendChild(s_image);

    span.classList.add('active');

    setTimeout(() => {
        span.removeChild(s_image);
        span.classList.remove('active');
    }, 500);
});
return(
    <>
  <div class="container-fluid">
        {/* <h1 className="log"><i class="fa-solid fa-cart-shopping"></i></h1> */}
        <section className="row">
            <div>

                <img className="pho" src="https://images.meesho.com/images/products/97021220/dkvjc_512.jpg" />
                <p className="cont">Shoe</p>
                <h6 className="cost">$345.89</h6>
                <sapn></sapn>
                <button>Add-Cart</button>
            </div>
            <div>
                <img className="pho" src="https://m.media-amazon.com/images/I/71PsOUwuTuL.jpg" />
                <p className="cont">Bat</p>
                <h6 className="cost">$8,000</h6>
                <sapn></sapn>
                <button>Add-Cart</button>
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2013/07/13/10/51/football-157930_640.png" />
                <p className="cont">Football</p>
                <h6 className="cost">$500</h6>
                <sapn></sapn>
                <button>Add-Cart</button>
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/I/61qv35tohEL._AC_UF894,1000_QL80_.jpg" />
                <p className="cont">Volleyball</p>
                <h6 className="cost">$500.50</h6>
                <sapn></sapn>
                <button>Add-Cart</button>
            </div>
            <div>
                <img src="https://t4.ftcdn.net/jpg/05/09/48/93/360_F_509489373_lBUzdGZ4NYwvDBnKrNGsffEWj3MWtGpR.jpg" />
                <p className="cont">Basketball</p>
                <h6 className="cost">$420</h6>
                <sapn></sapn>
                <button>Add-Cart</button>
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/I/61N0RcvuraL.jpg" />
                <p className="cont">Helmet</p>
                <h6 className="cost">$500.50</h6>
                <sapn></sapn>
                <button>Add-Cart</button>
            </div>
            <div>
                <img src="https://i5.walmartimages.com/asr/7463fa03-5d9f-4b26-909a-bbaca5fb7bf0.765ad699d9c0ed05bf6b76bcacce0111.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" />
                <p className="cont">tites</p>
                <h6 className="cost">$345.89</h6>
                <sapn></sapn>
                <button>Add-Cart</button>
            </div>
            <div>
                <img src="https://rukminim2.flixcart.com/image/850/1000/kr0ynbk0/board/m/y/b/best-of-all-full-size-tournament-carrom-board-with-wooden-coins-original-imag4wkhngndshxg.jpeg?q=90" />
                <p className="cont">Carrom</p>
                <h6 className="cost">$1000</h6>
                <sapn></sapn>
                <button>Add-Cart</button>
            </div>
        </section>
<div class="select"></div>

    </div>
  
    </>
);
}