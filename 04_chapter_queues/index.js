//Queues uses the FIFO principle.

//The Queue and Stack class	are	very similar.
//The only difference is the dequeue and front methods because of the difference between the FIFO and LIFO principles.

/**
 *
 * @constructor
 *
 enqueue(element(s)) : This adds a    new    item    (or    several    items)    at    the    back    of    the queue.

 dequeue() :    This    removes    the    first    item    from    the    queue    (the    item    that    is    in    the    front    of the    queue).    It    also    returns    the    removed    element.

 front() :    This    returns    the    first    element    from    the    queue,    the    first    one    added,    and    the
 first    one    that    will    be    removed    from    the    queue.    The    queue    is    not    modified    (it    does    not
 remove    the    element;    it    only    returns    the    element    for    information    purposes—very
 similar    to    the     peek    method    from    the     Stack    class).

 isEmpty() :    This    returns     true    if    the    queue    does    not    contain    any    elements    and     false    if
 the    queue    is    bigger    than    0.

 size() : This returns    how    many    elements    the    queue    contains.    It    is    similar    to    the
 length    property    of    the    array.
 */
function Queue() {
    var items = [];

    this.enqueue = function (element) {
        items.push(element);
    };
    this.dequeue = function () {
        return items.shift();
    };

    this.front = function () {
        return items[0];
    };

    this.isEmpty = function () {
        return items.length == 0;
    };

    this.size = function () {
        return items.length;
    };

    this.print = function () {
        console.log(items.toString());
    };
}

function PriorityQueue() {
    var items = [];

    function QueueElement(element, priority) {		//	{1}
        this.element = element;
        this.priority = priority;
    }

    this.enqueue = function (element, priority) {
        var queueElement = new QueueElement(element, priority);
        if (this.isEmpty()) {
            items.push(queueElement);	//	{2}
        } else {
            var added = false;
            for (var i = 0; i < items.length; i++) {
                if (queueElement.priority < items[i].priority) {
                    items.splice(i, 0, queueElement);	//	{3}
                    added = true;
                    break;	//	{4}
                }
            }
            if (!added) {	//{5}
                items.push(queueElement);
            }
        }

    };

    this.dequeue = function () {
        return items.shift();
    };

    this.front = function () {
        return items[0];
    };

    this.isEmpty = function () {
        return items.length == 0;
    };

    this.size = function () {
        return items.length;
    };

    this.print = function () {
        console.log(items.toString());
    };

}

function hotPotato(nameList, num) {
    var queue = new Queue();
    for (var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }
    var eliminated = '';

    while (queue.size() > 1) {
        for (var i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }

        eliminated = queue.dequeue();

        console.log(eliminated + ' was eliminated from the	Hot	Potato game.');
    }
    return queue.dequeue();
}