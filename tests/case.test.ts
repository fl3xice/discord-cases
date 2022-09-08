import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";
import { Chest, Item } from "../Case.ts";

class TestChest extends Chest<Item> {
    public items: Item[] = [
        {
            name: "Money",
            rate: 250,
        },
        {
            name: "Promocode",
            rate: 2000,
        },
        {
            name: "Ticket",
            rate: 6000,
        },
    ];
}

Deno.test("Frequency Drop", () => {
    let frequency = {
        Money: 0,
        Promocode: 0,
        Ticket: 0,
        All: 0,
    };

    const testChest = new TestChest();

    for (let i = 0; i < 5000; frequency.All++, i++) {
        switch (testChest.drop().name) {
            case "Money":
                frequency.Money++;
                break;
            case "Promocode":
                frequency.Promocode++;
                break;
            case "Ticket":
                frequency.Ticket++;
                break;
        }
    }

    assertEquals(
        frequency.Ticket > frequency.Money,
        true,
        "Tickets less than money"
    );

    assertEquals(
        frequency.Money < frequency.Promocode,
        true,
        "Money more than promocodes"
    );
});
