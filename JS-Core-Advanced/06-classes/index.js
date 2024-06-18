/*
[6] Classes

Вариант 3
Создайте класс «Сотрудник» со свойствами имени и зарплаты. Включите метод расчета
годовой зарплаты. Создайте подкласс под названием «Менеджер», который наследуется
от класса «Сотрудник» и добавляет дополнительное свойство для отдела.
Переопределить метод расчета годовой зарплаты, чтобы включить бонусы для менеджеров.
Создайте два экземпляра класса «Менеджер» и рассчитайте их годовую зарплату.
*/

class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    countAnnualSalary() {
        return this.salary * 12;
    }

    salaryReport(...args) {
        console.log(`${this.name}'s annual salary is ${this.countAnnualSalary(...args)}`);
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }

    countAnnualSalary(bonus = 0) {
        return super.countAnnualSalary() + bonus;
    }
}

const firstManager = new Manager("John Doe", 530, "QA");
const secondManager = new Manager("Michael Smith", 880, "Development");
const bonus = 333;

firstManager.salaryReport(bonus);
secondManager.salaryReport();