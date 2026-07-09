const butterflies = document.querySelectorAll('.butterfly');
butterflies.forEach((bf) => {
    bf.addEventListener('click', (e) => {
         e.stopPropagation();
        const randomX = Math.floor(Math.random() * 90);
        const randomY = Math.floor(Math.random() * 90);

        bf.style.left = `${randomX}%`;
        bf.style.top = `${randomY}%`;
    });
});


const smallCreature = document.querySelectorAll('.small-creature');

smallCreature.forEach((sc) => {
    sc.addEventListener('mouseover', (e) => {
        e.stopPropagation();

        // 40pxのサイズを考慮し、窓の黒い部分を広めにつかった範囲（%）
        const randomX = Math.floor(Math.random() * 50) + 40; 
        
        // Y座標（縦）: 35% 〜 57% の間（高さ 22%）
        const randomY = Math.floor(Math.random() * 20) + 38; 

        sc.style.left = `${randomX}%`;
        sc.style.top = `${randomY}%`;
        sc.style.transform = 'translate(-50%, -50%)'; // 中央基準を維持
    });
});