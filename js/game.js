function Strite(filename, left, top) {
    this._node = document.createElement("img");
    this._node.src = filename;
    this._node.style.position = "absolute";
    document.body.appendChild(this._node);

    Object.defineProperty(this, "left", {
        get: function() {
            return this._left;
        },
        set: function(value) {
            this._left = value;
            this._node.style.left = this._left + "px";
        }
    });

    Object.defineProperty(this, "top", {
        get: function() {
            return this._top;
        },
        set: function(value) {
            this._top = value;
            this._node.style.top = this._top + "px";
        }
    });

    this.left = left;
    this.top = top;

}