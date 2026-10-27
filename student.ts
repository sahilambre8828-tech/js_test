function getStudentInfo<T>(info: T): T {
    return info;
}

console.log(getStudentInfo<string>("Sahil"));
console.log(getStudentInfo<number>(101));
console.log(getStudentInfo<string>("A"));