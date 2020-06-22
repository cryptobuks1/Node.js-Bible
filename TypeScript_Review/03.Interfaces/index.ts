interface IAnimal {
    name: string;
    color: string;
}

const dog: IAnimal = {
    name: "Snoopy",
    color: "red"
}

interface OnInit {
    ngOnInit(): void;
}


class MyComponent implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

}