
const gui = new dat.GUI() //dat追加してみた
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = innerWidth
canvas.height = innerHeight

const wave = {
  y: canvas.height / 2,
  length: 0.01,
  amplitude: 100,
  frequency: 0.01
}

gui.add(wave, 'y' , 0, canvas.height)//高さ
gui.add(wave, 'length', -0.01, 0.01)//長さ
gui.add(wave,'amplitude', -300, 300) //振れ幅
gui.add(wave,'frequency', -0.01, 1) //周期,頻度



const animate = () => {
  requestAnimationFrame(animate)
  c.beginPath()

  c.moveTo(0, canvas.height / 2)

  for(let i = 0; i < canvas.width; i++) {
    c.lineTo(i, wave.y + Math.sin(i * wave.length + wave.frequency) * wave.amplitude)
  }

c.stroke()

}

animate();

