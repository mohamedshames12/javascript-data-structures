class LinkedPost {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newPost = { value: value, next: null };

    if (this.tail) {
      this.tail.next = newPost;
    }
    this.tail = newPost;
    if (!this.head) {
      this.head = newPost;
    }
  }

  prepend(value) {
    const newPost = { value: value, next: this.head };

    this.head = newPost;
    if (!this.tail) {
      this.tail = newPost;
    }
  }

  insertAfter(value, afterValue) {
    const existingPost = this.find(afterValue);

    if (existingPost) {
      const newPost = { value: value, next: existingPost.next };
      existingPost.next = newPost;
    }
  }

  find(value) {
    if (!this.head) {
      return null;
    }

    let curPost = this.head;

    while (curPost) {
      if (curPost.value === value) {
        return curPost;
      }
      curPost = curPost.next;
    }

    return null;
  }

  delete(value) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.next === value) {
      this.head = this.head.next;
    }

    let curPost = this.head;

    while (curPost.next) {
      if (curPost.next.value === value) {
        curPost.next = curPost.next.next;
      } else {
        curPost = curPost.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = curPost;
    }
  }

  toArray() {
    const elements = [];

    let curPost = this.head;
    while (curPost) {
      elements.push(curPost);
      curPost = curPost.next;
    }

    return elements;
  }
}

const linkedPost = new LinkedPost();

linkedPost.append(22);
linkedPost.append("mohamed shams");
linkedPost.append("mohamed shams");
linkedPost.append(2.222);
linkedPost.append(true);
linkedPost.prepend("first post");
linkedPost.prepend("first post");
console.log(linkedPost.toArray());

linkedPost.delete("mohamed shams");
linkedPost.delete("first post");
linkedPost.delete(2.222);

console.log(linkedPost.toArray());

console.log(linkedPost.find("first post"));
console.log(linkedPost.find("mohamed shams"));

console.log(linkedPost.toArray());

linkedPost.insertAfter("second post", 22);
linkedPost.insertAfter("second post - 2", "hello world");


console.log(linkedPost.toArray());
