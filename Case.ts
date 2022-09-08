export interface Item {
    name: string;
    rate: number;
}

export abstract class Chest<I extends Item> {
    public items: I[] = [];

    public drop(): I {
        return RandomDrop.getDrop(this);
    }
}

class RandomDrop {
    public static getDrop<I extends Item>(chest: Chest<I>): I {
        let max = 0;

        for (const item of chest.items) {
            max += item.rate;
        }

        let random = Math.floor(Math.random() * max);

        for (let i = 0, len = chest.items.length; i < len; i++) {
            const drop = chest.items[i];
            const { rate } = drop;

            if (random < rate) {
                return drop;
            }

            random -= rate;
        }

        throw Error("Bad evalute");
    }
}
