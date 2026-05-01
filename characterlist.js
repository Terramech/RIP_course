
document.addEventListener('DOMContentLoaded', () => {
    const listScroll = document.querySelector('.characterList');
    const items = document.querySelectorAll('.listElement');
    const descBlock = document.querySelector('.charInfoDescription');
    const imgBlock = document.querySelector('.charInfoSidebarImg');
    const nameBlock = document.querySelector('.charInfoSidebarName');

    if (!listScroll || items.length === 0) return;

    let activeIndex = -1;
    let ticking = false;
    
    
    function updateVisuals() {
        const listScrollRect = listScroll.getBoundingClientRect();
        const listScrollCenter = listScrollRect.top + listScrollRect.height / 2;
        
        let effectiveCenter = listScrollCenter;
        let closestDist = Infinity;
        let newActiveIndex = -1;
        
        items.forEach((item, index) => {
            const itemRect = item.getBoundingClientRect();
            const itemCenter = itemRect.top + itemRect.height / 2;
            
            const distance = Math.abs(itemCenter - effectiveCenter);
            const maxDistance = listScrollRect.height / 2;
            const normalizedDistance = Math.min(distance / maxDistance, 1);
            const opacity = Math.max(0.3, 1 - normalizedDistance * 0.8);
            const scale = Math.max(0.6, 1 - normalizedDistance * 0.5);

            item.style.opacity = opacity;
            item.style.transform = `scale(${scale})`;
            
            if (distance < closestDist) {
                closestDist = distance;
                newActiveIndex = index;
            }
        });
        if (newActiveIndex !== activeIndex && newActiveIndex !== -1) {
            activeIndex = newActiveIndex;
            const npcData = NPCList[activeIndex];
            
            if (descBlock) descBlock.textContent = npcData.description;
            if (imgBlock && npcData.image) imgBlock.src = npcData.image;
        }
        descBlock.innerHTML = `<h2 style="color: #B4B4B4; font-size: 24px; font-weight: 700; font-style: italic;">${NPCList[activeIndex].name}</h2> <br> ${NPCList[activeIndex].description}`;
        descBlock.classList.add('charInfoDescription');
        imgBlock.innerHTML = `<img src="${NPCList[activeIndex].image}" style="border-radius: 20px; width: 100%;" alt="">`;

    }

    listScroll.addEventListener('scroll', updateVisuals);
    window.addEventListener('resize', updateVisuals);
    setTimeout(updateVisuals, 100);
});







