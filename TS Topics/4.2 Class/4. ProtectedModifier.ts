//protected keyword allows subclasses to gain visibility into the parent class without exposing this API to other parts of the code.

class ListString {
  private contents: string[];
  constructor() {
    this.contents = [];
  }
  protected setElement(index: number, item: string) {
    this.contents[index] = item;
  }
}

class StackString extends ListString {
  currentIndex: number;

  constructor() {
    super();
    this.currentIndex = 0;
  }

  public push(item: string) {
    this.setElement(this.currentIndex, item);
    this.currentIndex++;
  }
}

var stack = new StackString();
//stack.setElement(0, 1); // error 'setElement' is protected and only visible to subclasses

// readonly :

//=======================================

// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Jaipur"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name

//     }
// }
class User {
  protected _courseCount = 1;

  readonly city: string = "Jaipur";
  constructor(
    public email: string,
    public name: string // private userId: string
  ) {}
  private deleteToken() {
    console.log("Token deleted");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1");
    }
    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const hitesh = new User("h@h.com", "hitesh");
// hitesh.name

// hitesh.deleteToken()
