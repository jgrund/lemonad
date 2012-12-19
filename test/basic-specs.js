describe("Basic functions", function() {
  beforeEach(function() {

  });

  describe("cat", function() {
    it("should concatenate two arrays", function() {
      var a = [1,2,3];
      var b = [4,5,6];

      expect(L.cat(a,b)).toEqual([1,2,3,4,5,6]);
    });

    it("should not modify the originals", function() {
      var a = [1,2,3];
      var b = [4,5,6];
      var _ = L.cat(a,b);

      expect(a).toEqual([1,2,3]);
      expect(b).toEqual([4,5,6]);
    });

    it("should concatenate two items, as long as the first is an array", function() {
      var a = [1];
      var b = 2;

      expect(L.cat(a,b)).toEqual([1,2]);
    });

    it("should concatenate 3 or more arrays", function() {
      var a = [1,2,3];
      var b = [4,5,6];
      var c = [7,8,9];
      var d = [0,0,0];

      expect(L.cat(a,b,c)).toEqual([1,2,3,4,5,6,7,8,9]);
      expect(L.cat(a,b,c,d)).toEqual([1,2,3,4,5,6,7,8,9,0,0,0]);
    });

    it("should concatenate three or more items, as long as the first is an array", function() {
      var a = [1];
      var b = 2;
      var c = 3;
      var d = [4];

      expect(L.cat(a,b,c)).toEqual([1,2,3]);
      expect(L.cat(a,b,c,d)).toEqual([1,2,3,4]);
    });

    it("should throw an exception if the first arg is not an array", function() {
      expect(function() { L.cat(1,2); }).toThrow();
      expect(function() { L.cat(1,[2]); }).toThrow();

    });
  });

  describe("pour", function() {
    it("should pour two arrays", function() {
      var a = [1,2,3];
      var b = [4,5,6];

      expect(L.pour(a,b)).toEqual([1,2,3,4,5,6]);
    });

    it("should not modify the originals", function() {
      var a = [1,2,3];
      var b = [4,5,6];
      var _ = L.pour(a,b);

      expect(a).toEqual([1,2,3]);
      expect(b).toEqual([4,5,6]);
    });

    it("should pour two items, as long as the first is an array", function() {
      var a = [1];
      var b = 2;

      expect(L.pour(a,b)).toEqual([1,2]);
    });

    it("should pour 3 or more arrays", function() {
      var a = [1,2,3];
      var b = [4,5,6];
      var c = [7,8,9];
      var d = [0,0,0];

      expect(L.pour(a,b,c)).toEqual([1,2,3,4,5,6,7,8,9]);
      expect(L.pour(a,b,c,d)).toEqual([1,2,3,4,5,6,7,8,9,0,0,0]);
    });

    it("should pour three or more items, as long as the first is an array", function() {
      var a = [1];
      var b = 2;
      var c = 3;
      var d = [4];

      expect(L.pour(a,b,c)).toEqual([1,2,3]);
      expect(L.pour(a,b,c,d)).toEqual([1,2,3,4]);
    });

    it("should throw an exception if the first arg is not an array", function() {
      expect(function() { L.pour(1,2); }).toThrow();
      expect(function() { L.pour(1,[2]); }).toThrow();

    });
  });

  describe("into", function() {
    it("should into two arrays", function() {
      var a = [1,2,3];
      var b = [4,5,6];

      expect(L.into(a,b)).toEqual([1,2,3,4,5,6]);
    });

    it("should not modify the originals", function() {
      var a = [1,2,3];
      var b = [4,5,6];
      var _ = L.into(a,b);

      expect(a).toEqual([1,2,3]);
      expect(b).toEqual([4,5,6]);
    });

    it("should throw an exception if either arg is not an array", function() {
      expect(function() { L.into(1,2); }).toThrow();
      expect(function() { L.into(1,[2]); }).toThrow();
      expect(function() { L.into(); }).toThrow();
      expect(function() { L.into([]); }).toThrow();
    });
  });

  describe("butLast", function() {
    it("should give all but the last element in an array", function() {
      var a = [1,2,3];

      expect(L.butLast(a)).toEqual([1,2]);
      expect(L.butLast([])).toEqual([]);
    });

    it("should not modify the original", function() {
      var a = [1,2,3];
      var _ = L.butLast(a);

      expect(a).toEqual([1,2,3]);
    });

    it("should throw an exception if not given an array", function() {
      expect(function() { L.butLast(1); }).toThrow();
    });
  });

  describe("cons", function() {
    it("should insert the first arg into the array given as the second arg", function() {
      var a = [1,2,3];
      var b = [0];

      expect(L.cons(0, a)).toEqual([0,1,2,3]);
      expect(L.cons(b, a)).toEqual([[0],1,2,3]);
      expect(L.cons(0, [])).toEqual([0]);
    });

    it("should create a pair if the second is not an array", function() {
      expect(L.cons(1, 2)).toEqual([1,2]);
      expect(L.cons([1], 2)).toEqual([[1],2]);
    });

    it("should not modify the original", function() {
      var a = [1,2,3];
      var _ = L.cons(0, a);

      expect(a).toEqual([1,2,3]);
    });
  });

  describe("interpose", function() {
    it("should inject the first arg in-between the elements of the second array arg", function() {
      var a = [1,2,3];
      var b = [1,2];

      expect(L.interpose(0, a)).toEqual([1,0,2,0,3]);
      expect(L.interpose(0, [])).toEqual([]);
      expect(L.interpose(0, [1])).toEqual([1]);
      expect(L.interpose(0, b)).toEqual([1,0,2]);
    });

    it("should not modify the original", function() {
      var a = [1,2,3];
      var _ = L.interpose(0, a);

      expect(a).toEqual([1,2,3]);
    });

    it("should throw an exception if not given an array", function() {
      expect(function() { L.interpose(0,1); }).toThrow();
      expect(function() { L.interpose(0); }).toThrow();
    });
  });

  describe("interleave", function() {
    it("should weave the arrays together", function() {
      var a = [1,2,3];
      var b = [1,2];
      var c = ['a', 'b', 'c'];

      expect(L.interleave(a,b)).toEqual([1,1,2,2,3]);
      expect(L.interleave(a,a)).toEqual([1,1,2,2,3,3]);
      expect(L.interleave(c,a)).toEqual(['a',1,'b',2,'c',3]);
      expect(L.interleave(a,b,c)).toEqual([1,1,'a',2,2,'b',3,'c']);
    });

    it("should not modify the original", function() {
      var a = [1,2,3];
      var _ = L.interleave(a, a);

      expect(a).toEqual([1,2,3]);
    });

    it("should throw an exception if not given arrays", function() {
      expect(function() { L.interleave(0,1); }).toThrow();
      expect(function() { L.interleave(0); }).toThrow();
      expect(function() { L.interleave(); }).toThrow();
    });
  });

  describe("repeat", function() {
    it("should build an array of some size with the specified element in each slot", function() {
      expect(L.repeat(3,1)).toEqual([1,1,1]);
      expect(L.repeat(0)).toEqual([]);
      expect(L.repeat(0,1)).toEqual([]);
    });

    it("should throw an exception if not given a number as the first arg", function() {
      expect(function() { L.repeat(); }).toThrow();
    });
  });

  describe("second", function() {
    it("should return the second element of the array given, undefined if outside of the bounds", function() {
      var a = [1,2,3];

      expect(L.second(a)).toEqual(2);
      expect(L.second([1])).toEqual(undefined);
      expect(L.second([])).toEqual(undefined);
    });

    it("should throw an exception if not given a number as the first arg", function() {
      expect(function() { L.second(1); }).toThrow();
    });
  });

  describe("increasing / increasingOrEq / decreasing / decreasingOrEq", function() {
    it("should recognize if the arguments are monotonically increasing or decreasing", function() {
      var inc = [1,2,3];
      var incAlso = [1,2,3,3,4];
      var dec = [5,4,3,2,1];
      var decAlso = [5,4,3,3,2,1];

      expect(L.increasing.apply(null, inc)).toBeTruthy();
      expect(L.increasingOrEq.apply(null, incAlso)).toBeTruthy();
      expect(L.increasing.apply(null, dec)).toBeFalsy();
      expect(L.decreasing.apply(null, dec)).toBeTruthy();
      expect(L.decreasingOrEq.apply(null, decAlso)).toBeTruthy();
      expect(L.decreasing.apply(null, inc)).toBeFalsy();
    });
  });

  describe("meth", function() {
    it("should wrap a method as a function and allow the target as the first arg", function() {
      var str = L.meth(toString);

      expect(str(42)).toEqual('[object Number]');
    });
  });

  describe("assoc", function() {
    it("should allow the placement of a value at any depth in an associative structure", function() {
      var obj = {a: {b: {c: 42, d: 108}}};
      var ary = ['a', ['b', ['c', 'd'], 'e']];

      expect(L.assoc(obj, ['a', 'b', 'c'], 9)).toEqual({a: {b: {c: 9, d: 108}}});
      expect(L.assoc(ary, [1, 1, 0], 9)).toEqual(['a', ['b', [9, 'd'], 'e']]);

      expect(L.assoc(obj, 'a', 9)).toEqual({a: 9});
      expect(L.assoc(ary, 1, 9)).toEqual(['a', 9]);
    });

    it("should not modify the original", function() {
      var obj = {a: {b: {c: 42, d: 108}}};
      var ary = ['a', ['b', ['c', 'd'], 'e']];
      var _   = L.assoc(obj, ['a', 'b', 'c'], 9);
      var __  = L.assoc(ary, [1, 1, 0], 9);

      expect(obj).toEqual({a: {b: {c: 42, d: 108}}});
      expect(ary).toEqual(['a', ['b', ['c', 'd'], 'e']]);
    });
  });

  describe("splitAt", function() {
    it("should bifurcate an array at a given index, returning an array of the parts", function() {
      var a = [1,2,3,4,5];

      expect(L.splitAt(2, a)).toEqual([[1,2], [3,4,5]]);
      expect(L.splitAt(0, a)).toEqual([[], [1,2,3,4,5]]);
      expect(L.splitAt(5, a)).toEqual([[1,2,3,4,5], []]);
      expect(L.splitAt(2, [])).toEqual([[], []]);
    });

    it("should not modify the original", function() {
      var a = [1,2,3,4,5];
      var _ = L.splitAt(2, a);

      expect(a).toEqual([1,2,3,4,5]);
    });

    it("should throw an exception if not given a number as the first arg or an array as the second", function() {
      expect(function() { L.splitAt('a', []); }).toThrow();
      expect(function() { L.splitAt(1); }).toThrow();
      expect(function() { L.splitAt(); }).toThrow();
    });
  });

  describe("takeSkipping", function() {
    it("should take every nth element in an array", function() {
      var a = _.range(10);

      expect(L.takeSkipping(2, a)).toEqual([0, 2, 4, 6, 8]);
    });

    it("should not modify the original", function() {
      var a = [1,2,3];
      var _ = L.takeSkipping(2, a);

      expect(a).toEqual([1,2,3]);
    });

    it("should throw an exception if not given a number as the first arg or an array as the second", function() {
      expect(function() { L.takeSkipping('a', []); }).toThrow();
      expect(function() { L.takeSkipping(1); }).toThrow();
      expect(function() { L.takeSkipping(); }).toThrow();
    });
  });
});