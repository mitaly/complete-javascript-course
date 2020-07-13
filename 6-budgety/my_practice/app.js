var budgetController = (function() {
    var Expense = function(id, desc, val) {
        this.id = id;
        this.desc = desc;
        this.val = val;
        this.percentage = -1;
    }

    Expense.prototype.calPercentage = function(totalInc) {
        if(totalInc > 0) {
            this.percentage = Math.round(Math.abs(this.val)/ totalInc * 100);
        }else {
            this.percentage = -1;
        }
    };

    var Income = function(id, desc, val) {
        this.id = id;
        this.desc = desc;
        this.val = val;
    }

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }

    // var generateId = (function() {
    //     var id = 0;
    //     return function() {
    //         return ++id;
    //     }
    // })();

    var calculateTotal = function(type) {
        var total = 0;
        data.allItems[type].forEach(function(current) {
            total += current.val;
        });
        data.totals[type] = total;
    }

    return {
        addItem: function(type, desc, val) {
            var item;
            var array = data.allItems[type];
            //generate next ID
            var ID = array.length === 0 ? 1 : array[(array.length)-1].id + 1;
``
            if(type === 'inc') {
                item = new Income(ID, desc, val);
            }else if(type === 'exp'){
                item = new Expense(ID, desc, val);
            }
            //add item in items array inc/exp
            data.allItems[type].push(item);
            //total inc/exp
            // data.totals[type] += val;
            console.log(data);
            return item;
        },
        calculateBudget: function() {
            calculateTotal('inc');
            calculateTotal('exp');

            var budget = data.totals.inc - data.totals.exp;
            data.budget = budget;

            if(data.totals.inc !== 0) {
                var expensePercentage = Math.round((data.totals.exp/data.totals.inc) * 100);
                data.percentage = expensePercentage;
            }
        },
        getBudget: function() {
            return {
                budget: data.budget,
                percentage: data.percentage,
                totalIncome: data.totals.inc,
                totalExpense: data.totals.exp
            }
        },
        deleteItem: function(ID) {
            var type = ID.startsWith('income') ? 'inc' : 'exp';
            
            var id = parseInt(ID.split('-')[1]);

            var ids = data.allItems[type].map(function(current) {
                return current.id;    
            });

            var index = ids.indexOf(id);

            if(index !== -1) {
                data.allItems[type].splice(index, 1);
            }

            // data.allItems[type] = data.allItems[type].filter(function(current) {
            //         return current.id !== id;
            //     });
            console.log('item deleted from controller');
            console.log(data.allItems[type]);
        },
        calculateEachExpensePercentage: function() {
            data.allItems.exp.forEach(current => {
                current.calPercentage(data.totals.inc);
            })
        },
        getEachExpensePercentage: function() {
            return data.allItems.exp.map(current => {
                return current.percentage;
            })
        }
    }

})();

var uiController = (function() {
    var DOMstrings = {
        addItemType: 'add__type',
        addItemDesc: 'add__description',
        addItemValue: 'add__value',
        addItemBtn: 'add__btn',
        incomeList: 'income__list',
        expenseList: 'expenses__list',
        inputDesc: 'add__description',
        inputVal: 'add__value',
        selectorIncExp: 'add__type',
        budgetIncome: 'budget__income--value',
        budgetExpense: 'budget__expenses--value',
        budgetExpensesPercentage: 'budget__expenses--percentage',
        budgetValue: 'budget__value',
        deleteItemBtn: 'item__delete--btn',
        deleteItemIcon: 'ion-ios-close-outline',
        container: 'container',
        expenseItemPercentage: 'item__percentage',
        monthLabel: 'budget__title--month'
    };

    var formatNumber = function(val) {
        var fixedAndDecimal, fixedPart, result = '', 
        
        val = Math.abs(val);
        // val which is primitive number will be converted to Object number and calls the method- toFixed on that
        // toFixed will return decimal places upto 2. If not present, adds 00, else rounds off the given decimal values.
        val = val.toFixed(2);

        fixedAndDecimal = val.split('.');
        fixedPart = fixedAndDecimal[0];
        
        // 2300 -> 2,300
        // 23242 -> 23,242
        // 456788 -> 456,788
        
        if(fixedPart.length > 3){
            var initial = fixedPart.length % 3;
            result = fixedPart.substr(0, initial);
            
            for(var index = initial; index < fixedPart.length; index+=3) {
                if(initial === 0){
                    initial = -1;
                    result = result.concat(fixedPart.substr(index, 3));
                }else {
                    result = result.concat(',', fixedPart.substr(index, 3));
                }
            }
        }else {
            result = fixedPart;
        }
        
        return result.concat('.', fixedAndDecimal[1]);
        /*var c = 0;
        var res = '';
        for(var i = strNum.length-1; i >= 0; i--) {
            c++;
            if(c === 4) {
                res = res.concat(',');
                c = 1;
            }
            res = res.concat(strNum.charAt(i));
        }

        res = rev(res);
        res = res.concat('.', fixedAndDecimal[1]);
        return res;*/
    }

    var rev = function(str) {
        var srArr = str.split('');
        srArr = srArr.reverse();
        return srArr.join('');
    }

    var nodeListForEach = function(list, callback) {
        for(var index = 0; index < list.length; index++) {
            callback(list[index], index);
        }
    }

    return {
        getDOMstrings: function() {
            return DOMstrings;
        },
        readInput: function() {
            return {
                type: document.getElementsByClassName(DOMstrings.addItemType)[0].value,
                desc: document.getElementsByClassName(DOMstrings.addItemDesc)[0].value,
                val: parseFloat(document.getElementsByClassName(DOMstrings.addItemValue)[0].value)
            };
        },
        showAddedItem: function(newItem, type) {
            var html, listHTML;
            if(type === 'inc') {
                html = '<div class="item clearfix" id="income-%ID%"><div class="item__description">%DESC%</div><div class="right clearfix"><div class="item__value">+ %VALUE%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

                listHTML = document.getElementsByClassName(DOMstrings.incomeList)[0];
            }else {
                html = '<div class="item clearfix" id="expense-%ID%"><div class="item__description">%DESC%</div><div class="right clearfix"><div class="item__value">- %VALUE%</div><div class="item__percentage">%PERCENTAGE%%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';

                listHTML = document.getElementsByClassName(DOMstrings.expenseList)[0];
                console.log(listHTML);
            }

            html = html.replace('%ID%', newItem.id);
            html = html.replace('%DESC%', newItem.desc);
            html = html.replace('%VALUE%', formatNumber(newItem.val));
            html = html.replace('%PERCENTAGE%', 90);

            listHTML.insertAdjacentHTML('beforeend', html);
            /*var divItem = document.createElement("div");
            divItem.id = (type === 'inc' ? 'income-' : 'expense-') + newItem.id;
            divItem.classList.add('item');
            divItem.classList.add('clearfix');

            var divItemDesc = document.createElement('div');
            divItemDesc.classList.add('item__description');
            divItemDesc.textContent = newItem.desc;

            var divItemRight = document.createElement('div');
            divItemRight.classList.add('right');
            divItemRight.classList.add('clearfix');


            var divItemValue = document.createElement('div');
            divItemValue.classList.add('item__value');
            divItemValue.textContent = (type === 'inc' ? '+ ' : '- ') + newItem.val;

            var divItemDelete = document.createElement('div');
            divItemDelete.classList.add('item__delete');

            var buttonItemDelete = document.createElement('button');
            buttonItemDelete.classList.add('item__delete--btn');

            var iItemDelete = document.createElement('i');
            iItemDelete.classList.add('ion-ios-close-outline');

            buttonItemDelete.appendChild(iItemDelete);
            divItemDelete.appendChild(buttonItemDelete);

            divItemRight.appendChild(divItemValue);
            if(type === 'exp') {
                //TODO: change percentage
                var percentage = 10;
                var divItemPercentage = document.createElement('div');
                divItemPercentage.textContent = '' + percentage + '%';
                divItemPercentage.classList.add('item__percentage');

                divItemRight.appendChild(divItemPercentage);
            }
            divItemRight.appendChild(divItemDelete);

            divItem.appendChild(divItemDesc);
            divItem.appendChild(divItemRight);

            document.getElementsByClassName(type === 'inc' ? DOMstrings.incomeList : 
            DOMstrings.expenseList)[0].appendChild(divItem);*/
        },
        clearInputFields: function() {
            var inputList = document.querySelectorAll('.' + DOMstrings.inputDesc + ', ' + '.' + DOMstrings.inputVal);
            // workaround to convert the list to array - we call the array method(slice) by passing a list.
            // slice will return the array always. The 'this' keyword used inside the slice method will now point //// to list
            var inputArr = Array.prototype.slice.call(inputList);
            inputArr.forEach(function(current, index, array) {
                current.value = '';
            });

            // put the focus back on the description input element
            inputArr[0].focus();
            
            // selecting the inc(+) button in the selector
            document.getElementsByClassName(DOMstrings.selectorIncExp)[0].value = 'inc';

            /*document.getElementsByClassName(DOMstrings.inputDesc)[0].value = '';
            document.getElementsByClassName(DOMstrings.inputVal)[0].value = '';
            document.getElementsByClassName(DOMstrings.selectorIncExp)[0].value = 'inc';*/
        },
        showBudget: function(obj) {
            document.getElementsByClassName(DOMstrings.budgetValue)[0].textContent = (obj.budget > 0 ? '+' : '-') +     formatNumber(obj.budget);
            document.getElementsByClassName(DOMstrings.budgetIncome)[0].textContent = '+ ' + formatNumber(obj.totalIncome);
            document.getElementsByClassName(DOMstrings.budgetExpense)[0].textContent = '- ' + formatNumber(obj.totalExpense);

            if(obj.percentage > 0)
                document.getElementsByClassName(DOMstrings.budgetExpensesPercentage)[0].textContent = obj.percentage + '%';
            else
                document.getElementsByClassName(DOMstrings.budgetExpensesPercentage)[0].textContent = '----';
        },
        removeItem: function(ID) {
            var child = document.getElementById(ID);
            child.parentNode.removeChild(child);
            /*var parentList;
            if(ID.startsWith('income')){
                parentList = document.getElementsByClassName(DOMstrings.incomeList)[0];
            }else{
                parentList = document.getElementsByClassName(DOMstrings.expenseList)[0];
            }
            parentList.removeChild(document.getElementById(ID));*/
            console.log('Element Item removed from UI');
        },
        updateEachExpensePercentage: function(expensePercentages) {
            var listItemPercentages = document.querySelectorAll('.'+DOMstrings.expenseItemPercentage);
        
            nodeListForEach(listItemPercentages, function(current, index) {
                var percentage = expensePercentages[index];
                if(percentage > 0) {
                    current.textContent = percentage + '%';
                }else {
                    current.textContent = '----';
                }
            });
            // var arrItemPercentages = Array.prototype.slice.call(listItemPercentages);

            /* for(var index = 0; index < listItemPercentages.length; index++) {
                var percentage = expensePercentages[index];
                if(percentage > 0){
                    listItemPercentages[index].textContent = percentage + '%';
                }else {
                    listItemPercentages[index].textContent = '-----';
                }   
            }*/ 

            /*listItemPercentages.forEach((current, index) => {
                var percentage = expensePercentages[index];
                if(percentage > 0){
                    current.textContent = percentage + '%';
                }else {
                    current.textContent = '-----';
                }
            });*/
            
            /*for(expense of expenses) {
                var selector = '#expense-' + expense.id + ' .' + DOMstrings.expenseItemPercentage;
                
                if(expense.percentage > 0){
                    document.querySelector(selector).textContent = expense.percentage + '%';
                }else {
                    document.querySelector(selector).textContent = '---';
                }
                console.log('update expense percentage in ui for ', expense.id);
            }*/
        },

        displayMonthAndYear: function(yearMonthObj) {
            document.getElementsByClassName(DOMstrings.monthLabel)[0].textContent = yearMonthObj.month + ' ' + yearMonthObj.year;
        },

        changeCSSOfInputs: function() {
            var listInputs = document.querySelectorAll('.' + DOMstrings.addItemType + ',' + '.' + DOMstrings.addItemDesc + ',' + '.' + DOMstrings.addItemValue);

            nodeListForEach(listInputs, function(current, index) {
                current.classList.toggle('red-focus');
            });

            document.getElementsByClassName(DOMstrings.addItemBtn)[0].classList.toggle('red');
        }
    };
})();

var controller = (function(budgetCtrl, uiCtrl) {
    var DOMstrings = uiCtrl.getDOMstrings();

    var setUpEventListeners = function() {
        document.getElementsByClassName(DOMstrings.addItemBtn)[0].addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

        document.getElementsByClassName(DOMstrings.container)[0].addEventListener('click', handleDeleteItemEvent);

        document.getElementsByClassName(DOMstrings.addItemType)[0].addEventListener('change', handleAddInputChangeEvent);
    };
    
    var handleAddInputChangeEvent = function(event) {
        uiCtrl.changeCSSOfInputs();
    };

    var handleDeleteItemEvent = function(event) {
        if(event.target.className === DOMstrings.deleteItemIcon){
            // Get the item
            var itemContainer = event.target.parentNode.parentNode.parentNode.parentNode;
            console.log('parentElem', itemContainer);
            var ID = itemContainer.id;
            
            // Delete the item from DS
            budgetCtrl.deleteItem(ID);
            
            // Remove item from UI
            uiCtrl.removeItem(ID);
            
            // Update and show updated budget
            calAndUpdateBudget();

            calAndUpdateEachExpensePerc();
        }
    }

    var calAndUpdateBudget = function() {
        // calculate budget
        budgetCtrl.calculateBudget();
        
        // get budget
        var budgetObj = budgetCtrl.getBudget();

        // update budget in UI
        uiCtrl.showBudget(budgetObj);
    };

    var calAndUpdateEachExpensePerc = function() {
        // calculate each expense percentage
        budgetCtrl.calculateEachExpensePercentage();

        // get percentages array
        var expensePercentages = budgetCtrl.getEachExpensePercentage();

        // update each expense percentage
        uiCtrl.updateEachExpensePercentage(expensePercentages);
    };

    var showCurrentMonthAndYear = function() {
        var yearMonthObj = getCurrentMonthAndYear();
        uiCtrl.displayMonthAndYear(yearMonthObj);
    };

    var getCurrentMonthAndYear = function() {
        var date, months;
        date = new Date();

        months = ["Jaunary", "February", "March", "April","May", "June", "July",  "August","September", "October", "November","December"];

        return {
            year: date.getFullYear(),
            month: months[date.getMonth()]
        }
    };

    var ctrlAddItem = function() {
        // Getting the input values from UI controller
        var inputObject = uiCtrl.readInput();   
        console.log(inputObject);   
        if(inputObject.desc.trim() !== '' && !isNaN(inputObject.val) && inputObject.val != 0) {
            // Store the expense/income in DS using BudgetController
            var newItem = budgetCtrl.addItem(inputObject.type, inputObject.desc, inputObject.val);

            //Show the item added in UI
            uiCtrl.showAddedItem(newItem, inputObject.type);

            // clear the fields after successful add
            uiCtrl.clearInputFields();

            // get the budget totals and update in UI
            calAndUpdateBudget();

            // caluclate each expense percentage and update in UI
            calAndUpdateEachExpensePerc();
        }   
    };

    return {
        init: function() {
            uiCtrl.showBudget({
                budget: 0,
                percentage: 0,
                totalIncome: 0,
                totalExpense: 0 
            })
            setUpEventListeners();
            showCurrentMonthAndYear();
        }
    };
})(budgetController, uiController);

controller.init();
