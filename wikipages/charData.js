class Entity {
    constructor(name, description, playable, type, debute) {
        this.name = name;
        this.description = description;
        this.playable = playable;
        this.type = type;
        this.debute = debute;
    }
}
class NPC extends Entity {
    constructor(name, description, playable, type, debute, HP, HPType, tacHP, tacHPType, Faction, image) {
        super(name, description, playable, type, debute);
        this.HP = HP;
        this.HPType = HPType;
        this.tacHP = tacHP;
        this.tacHPType = tacHPType;
        this.Faction = Faction;
        this.image = image;
    }
}

ATPEng = new NPC("ATP Инжинер", "Противник из AAHW. Фокусируется на более стратегическом стиле боя", false, "Грант", "Пустоши", 100, "Обычный", 50, "Продвинутое", "AAHW", "../images/characters/entity_ATP_Engineer.png");
ATPAgent = new NPC("ATP Агент", "Самый распространенный враг AAHW.", false, "Грант", "Пустоши", 50, "Обычный", 15, "Продвинутое", "AAHW", "../images/characters/entity_ATP_Agent.png");
NexusEng = new NPC("Nexus Инжинер", "Враг из Nexus Core. Улучшенная версия ATP Инжинера", false, "Грант", "Climb!", 200, "Обычный, x2", 75, "Продвинутое", "Nexus Core", "../images/characters/entity_Nexus_Engineer.png");

window.NPCList = [ATPEng, ATPAgent, NexusEng];

const characterList = document.querySelector('.characterList');
for (let npc of NPCList) {
    const npcElement = document.createElement('div');
    npcElement.classList.add('listElement');
    npcElement.innerHTML = npc.name;
    npcInfo = () => {
        const descBlock = document.querySelector('.charInfoDescription');
        const imgBlock = document.querySelector('.charInfoSidebarImg');
        descBlock.innerHTML = npc.description;
        imgBlock.innerHTML = `<img src="${npc.image}" alt="">`;
    }
    
    characterList.appendChild(npcElement);
}