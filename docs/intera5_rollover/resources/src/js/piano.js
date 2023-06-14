//DOM
const Key = document.querySelectorAll('.key');

//シンセ生成
const synth = new Tone.MonoSynth().toDestination();


// note:ドレミなどの音階を指定
// dur:「4n」->「♩」(四分音符)、「8n」->「♪」(八分音符)
// nullだと休符

//鍵盤数分ループ
for (let i = 0; i < Key.length; i++) {
Key[i].addEventListener("click", function () { 
    //ID名取得
    const idName = this.id;
    //音階を代入
    synth.triggerAttackRelease(idName, "8n"); 
}, false);
}