class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    rContains(value, currentNode = this.root) {
        if (currentNode === null) return false

        if (value === currentNode.value) return true

        if (value < currentNode.value) {
            return this.rContains(value, currentNode.left)
        } else {
            return this.rContains(value, currentNode.right)
        }
    }

    #rInsert(value, currentNode = this.root) {
        if (value < currentNode.value) {
            if (currentNode.left === null) {
                currentNode.left = new Node(value);
            } else {
                this.#rInsert(value, currentNode.left);
            }
        } else if (value > currentNode.value) {
            if (currentNode.right === null) {
                currentNode.right = new Node(value);
            } else {
                this.#rInsert(value, currentNode.right);
            }
        }
    }

    rInsert(value) {
        if (this.root === null) this.root = new Node(value)
        this.#rInsert(value)
    }

    #subTreeMin(currentNode) {
        // йдемо вліво до кінця — там найменше значення
        while (currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }

    #rDelete(value, currentNode = this.root) {
        // база: дійшли до null — значення не існує в дереві
        if (currentNode === null) return null;

        if (value < currentNode.value) {
            // значення менше — йдемо вліво
            // результат рекурсії присвоюємо назад, щоб зберегти зв'язок
            currentNode.left = this.#rDelete(value, currentNode.left);

        } else if (value > currentNode.value) {
            // значення більше — йдемо вправо
            currentNode.right = this.#rDelete(value, currentNode.right);

        } else {
            // ми знайшли вузол який треба видалити!

            // ВИПАДОК 1: вузол — листок (немає дітей)
            // просто повертаємо null — батько отримає null і відв'яже цей вузол
            if (currentNode.left === null && currentNode.right === null) {
                return null;
            }

            // ВИПАДОК 2а: є тільки права дитина
            // повертаємо правого нащадка — батько підключить його замість поточного вузла
            if (currentNode.left === null) {
                return currentNode.right;
            }

            // ВИПАДОК 2б: є тільки ліва дитина
            // те саме, але з лівим нащадком
            if (currentNode.right === null) {
                return currentNode.left;
            }

            // ВИПАДОК 3: є обидві дитини — найскладніший випадок
            // не можна просто видалити вузол, бо загубимо піддерева
            // рішення: знайти найменший вузол у правому піддереві (subTreeMin)
            // і поставити його значення на місце поточного вузла
            let minValue = this.#subTreeMin(currentNode.right);

            // замінюємо значення (не сам вузол!) — зв'язки залишаються
            currentNode.value = minValue;

            // тепер видаляємо той мінімальний вузол знизу,
            // бо його значення вже скопійовано вгору
            currentNode.right = this.#rDelete(minValue, currentNode.right);
        }

        // повертаємо поточний вузол — він залишається на своєму місці
        return currentNode;
    }

    rDelete(value) {
        // оновлюємо root, бо якщо видаляємо корінь — він теж зміниться
        this.root = this.#rDelete(value, this.root);
    }
}

let myBST = new BST();
myBST.rInsert(2);
myBST.rInsert(1);
myBST.rInsert(3);

console.log("\nRoot: " + myBST.root.value);
console.log("\nRoot->Left: " + myBST.root.left.value);
console.log("\nRoot->Right: " + myBST.root.right.value);

myBST.rDelete(2);

console.log("\nRoot: " + myBST.root.value);
console.log("\nRoot->Left: " + myBST.root.left.value);
console.log("\nRoot->Right: " + myBST.root.right);