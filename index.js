'use strict';
    let number = ['1','2','3']
    let picture = ['高輪','亀戸','麹町','御成門','等々力','石神井','雑色','御徒町','鹿骨','小榑']
    let choice = [
        ['たかなわ','こうわ','たかわ'],['かめいど','かめど','かめと'],['こうじまち','おかとまち','かゆまち'],['おなりもん','おかどもん','ごせいもん'],
        ['とどろき','たたら','たたりき'],['しゃくじい','せきこうい','いじい'],['ぞうしき','ざっしき','ざっしょく'],['おかちまち','ごしろちょう','みとちょう'],
        ['ししぼね','しこね','ろっこつ'],['こぐれ','こはく','こしゃく']].map(shuffle);
    
        function shuffle(arr) {
            for (let k = arr.length - 1; k > 0; k--) { // i = ランダムに選ぶ終点のインデックス
              const j = Math.floor(Math.random() * (k + 1));  // j = 範囲内から選ぶランダム変数
              [arr[j], arr[k]] = [arr[k], arr[j]]; // 分割代入 i と j を入れ替える
            }
            return arr;
        }



let main =''
let loop= document.getElementById('loop');
    // 問題の複製
    for(let i = 0; i<10; i++){
        main += '<h2 class="title">'+[i+1]+'.この地名はなんて読む？</h2>'
        +'<img src="image/'+picture[i]+'.png" alt="高輪">'
        +'<ul class="choices" id="choices">'
        +'<li class="choice" id="true-choice'+[i]+'">'+choice[i][0]+'</li>'
        +'<li class="choice" id="wrong-choice'+[i]+1+'">'+choice[i][1]+'</li>'
        +'<li class="choice" id="wrong-choice'+[i]+2+'">'+choice[i][2]+'</li>'
        +'</ul>'
        +'<div class="quiz-result" class="result-true" id="result-true'+[i]+'">'
        +'<p class="answer-title-true">正解！</p>'
        +'<p class="answer-p">正解は「'+choice[i][0]+'」です！</p>'
        +'</div>'
        +'<div class="quiz-result" id="result-false'+[i]+'">'
        +'<p class="answer-title-false">不正解！</ｐ>'
        +'<p class="answer-p">正解は「'+choice[i][0]+'」です！</p>'
        +'</div>';
        loop.innerHTML = main;
    };
    for(let i = 0; i<10; i++){
        const trueBlue = document.getElementById('true-choice'+[i]+'');
        const falseRed1 = document.getElementById('wrong-choice'+[i]+1+'')
        const falseRed2 = document.getElementById('wrong-choice'+[i]+2+'')
        // 正解をクリックした時の処理
        trueBlue.addEventListener('click', () => {
            const answerBox1 = document.getElementById('result-true'+[i]+'');
            trueBlue.classList.add('button1');
            answerBox1.classList.add('result-true');
            falseRed1.classList.add('unClick');
            falseRed2.classList.add('unClick');
        } , false);    
        // addEventListener 使い方 対象要素.addEventListener( 種類, 関数, false )
        // クリックした時に正解を青くして、正解のボックスを出す
        
        // 不正解をクリックしたときの処理
        falseRed1.addEventListener('click',() => {
            const answerBox2 = document.getElementById('result-false'+[i]+'');
            trueBlue.classList.add('button1','unClick');
            falseRed1.classList.add('button2');
            falseRed2.classList.add('unClick');
            answerBox2.classList.add('result-true');
            
        } , false);    
        falseRed2.addEventListener('click',() => {
            const answerBox2 = document.getElementById('result-false'+[i]+'');
            trueBlue.classList.add('button1','unClick');
            falseRed1.classList.add('unClick');
            falseRed2.classList.add('button2');
            answerBox2.classList.add('result-true');
        } , false);    }
        // クリックをしたときに正解を青く、不正解を赤く、不正解のボックスを出す
        // 繰り返しの時は文字列として認識してもらう    
        
    




