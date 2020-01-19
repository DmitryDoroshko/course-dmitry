let user={};

for(let key in user) {
    if (user.hasOwnProperty(key)) {
        document.write("свойства есть");
    } else {
        document.write("свойств нет");
    }
}

