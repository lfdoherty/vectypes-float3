
function isNumber(n) : boolean {
	return typeof (n) === 'number';
}
function assertNumber(n) : number {
	if (!isNumber(n)) throw new Error(`not a number: ${n}`);
	return n;
}

const Epsilon = Number.EPSILON

export interface Duck {x: number, y: number, z: number}
export const T = Float3;

export function vec(x: number, y: number, z: number): Float3 {
	return new Float3(x, y, z)
}
export function as(json: Duck): Float3 {
	return Float3.fromJson(json)
}
export function is(json: Duck) : boolean {
	return isNumber(json.x) && isNumber(json.y) && isNumber(json.z)
}
export function copy(json: Duck): Float3 {
	return fromJson(json)
}

export function fromJson(json: Duck): Float3 {
	assertNumber(json.x)
	assertNumber(json.y)
	assertNumber(json.z)
	return new Float3(json.x, json.y, json.z);
}
export function one() : Float3 {
	return new Float3(1,1,1)
}
export function zero() : Float3 {
	return new Float3(0,0,0)
}
export function dot(a: Duck, b: Duck) : number {
	return (a.x*b.x) + (a.y*b.y) + (a.z*b.z);
}
export function magFlat(x: number, y: number, z: number) : number {
	return Math.sqrt((x*x) + (y*y) + (z*z));
}
export function magFlatSquared(x: number, y: number, z: number): number {
	return (x * x) + (y * y) + (z * z);
}
export function distance(a: Duck, b: Duck) : number{
	const dx = a.x - b.x;
	const dy = a.y - b.y;
	const dz = a.z - b.z;
	return Math.sqrt((dx * dx) + (dy * dy) + (dz * dz));
}
export function distanceSquared(a: Duck, b: Duck): number {
	const dx = a.x - b.x;
	const dy = a.y - b.y;
	const dz = a.z - b.z;
	return (dx * dx) + (dy * dy) + (dz * dz);
}

export class Float3 {
	constructor(x: number, y: number, z: number){
		this.x = x;
		this.y = y;
		this.z = z;
	}


	set(v: Duck) : Float3 {
		this.x = v.x
		this.y = v.y
		this.z = v.z
		return this
	}
	setFlat(x: number, y:number, z:number): Float3 {
		this.x = x;
		this.y = y;
		this.z = z;
		return this;
	}
	isZero() : boolean {
		return  Math.abs(this.x) < Epsilon &&
				Math.abs(this.y) < Epsilon &&
				Math.abs(this.z) < Epsilon
	}
	copy() : Float3 {
		return new Float3(this.x, this.y, this.z)
	}
	toString() : string {
		return `${this.x},${this.y},${this.z}`
	}
	toShortString() : string {
		return `${this.x.toFixed(2)},${this.y.toFixed(2)},${this.z.toFixed(2)}`
	}
	toArray(): number[] {
		return [this.x, this.y, this.z]
	}
	mag() : number {
		return magFlat(this.x,this.y,this.z)
	}
	magSquared(): number {
		return magFlatSquared(this.x, this.y, this.z)
	}

	dot(v): number {
		return dot(this,v)
	}
	distance(v: Duck): number {
		return distance(this, v);
	}
	distanceSquared(v: Duck): number {
		return distanceSquared(this, v);
	}
	equals(v: Duck) : boolean {
		return (Math.abs(v.x - this.x) < Epsilon) && (Math.abs(v.y - this.y) < Epsilon) && (Math.abs(v.z - this.z) < Epsilon);
	}
	add(v: Duck) : Float3 {
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
		return this;
	}
	addFlat(x: number, y: number, z: number): Float3 {
		this.x += x;
		this.y += y;
		this.z += z;
		return this;
	}
	addScaled(s: number, v: Duck): Float3 {
		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;
		return this;
	}
	addMultiplied(s: Duck, v: Duck): Float3 {
		this.x += v.x * s.x;
		this.y += v.y * s.y;
		this.z += v.z * s.z;
		return this;
	}
	addX(v:number): Float3 {
		this.x += v;
		return this;
	}
	addY(v:number): Float3 {
		this.y += v
		return this
	}
	addZ(v:number) : Float3 {
		this.z += v
		return this
	}
	setX(v:number) : Float3 {
		this.x = v
		return this
	}
	setY(v:number) : Float3 {
		this.y = v
		return this
	}
	setZ(v:number) : Float3 {
		this.z = v;
		return this;
	}
	sub(v: Duck): Float3 {
		this.x -= v.x
		this.y -= v.y
		this.z -= v.z
		return this
	}
	negate() : Float3 {
		this.x = -this.x
		this.y = -this.y
		this.z = -this.z
		return this
	}
	invert(): Float3 {
		this.x = 1 / this.x;
		this.y = 1 / this.y;
		this.z = 1 / this.z;
		return this;
	}
	abs(): Float3 {
		this.x = Math.abs(this.x)
		this.y = Math.abs(this.y)
		this.z = Math.abs(this.z)
		return this
	}
	divide(v: Duck): Float3 {
		this.x /= v.x
		this.y /= v.y
		this.z /= v.z
		return this
	}
	multiply(v : Duck) : Float3 {
		this.x *= v.x
		this.y *= v.y
		this.z *= v.z
		return this
	}
	multiplyFlat(x: number, y: number, z: number): Float3 {
		this.x *= x
		this.y *= y
		this.z *= z
		return this
	}
	divideFlat(x: number, y: number, z: number): Float3 {
		this.x /= x
		this.y /= y
		this.z /= z
		return this
	}
	scale(sf: number): Float3 {
		this.x *= sf
		this.y *= sf
		this.z *= sf
		return this
	}
	min(v : Duck) : Float3 {
		this.x = Math.min(this.x, v.x)
		this.y = Math.min(this.y, v.y)
		this.z = Math.min(this.z, v.z)
		return this
	}
	max(v : Duck) : Float3 {
		this.x = Math.max(this.x, v.x)
		this.y = Math.max(this.y, v.y)
		this.z = Math.max(this.z, v.z)
		return this
	}
	maxScalar(v: number): Float3 {
		this.x = Math.max(this.x, v)
		this.y = Math.max(this.y, v)
		this.z = Math.max(this.z, v)
		return this;
	}
	minScalar(v: number): Float3 {
		this.x = Math.min(this.x, v)
		this.y = Math.min(this.y, v)
		this.z = Math.min(this.z, v)
		return this;
	}
	floor(): Float3 {
		this.x = Math.floor(this.x)
		this.y = Math.floor(this.y)
		this.z = Math.floor(this.z)
		return this
	}
	ceil() : Float3 {
		this.x = Math.ceil(this.x)
		this.y = Math.ceil(this.y)
		this.z = Math.ceil(this.z)
		return this
	}
	normalize() : Float3 {
		const s = 1/this.mag()
		this.x *= s
		this.y *= s
		this.z *= s
		return this
	}
	volume() : number{
		return this.x * this.y * this.z
	}
	cross(b: Duck): Float3 {
		const a = this;
		this.x = (a.y*b.z) - (a.z*b.y);
		this.y = (a.z*b.x) - (a.x*b.z);
		this.z = (a.x*b.y) - (a.y*b.x);
		return this;
	}
	angle(b: Duck): number {
		const a = this;
		a.assertUnit()
		b.assertUnit()
		const d = dot(a,b)
		return Math.acos(d)//acos returns between 0 and PI		
	}

	isOk() : boolean {
		return !isNaN(this.x) && !isNaN(this.y) && !isNaN(this.z)
	}
	assertOk() : Float3 {
		if(!this.isOk()) throw new Error(`not OK ${this}`)
		return this
	}
	assertNotZero() : Float3 {
		if(this.isZero()) throw new Error(`is zero ${this}`)
		return this
	}
	assertLessThan(p : Duck) : Float3 {
		if(!this.isLessThan(p)) throw new Error(`not less than ${this} !< ${p}`)
		return this
	}
	isLessThan(p : Duck) : boolean {
		return this.x < p.x && this.y < p.y && this.z < p.z
	}
	isGreaterThan(p : Duck) : boolean {
		return this.x > p.x && this.y > p.y && this.z > p.z
	}
	assertPositive() : Float3 {
		if(!this.isPositive(this)) throw new Error(`not positive ${this}`)
		return this
	}
	assertUnit() : Float3 {
		const m = this.mag()
		if(Math.abs(1-m) > .0001) throw new Error(`not a unit vector: ${this}, magnitude: ${m}`)
		return this
	}
	isUnit(): boolean {
		return Math.abs(1 - this.mag()) < Epsilon;
	}
	isIntegers(): boolean {
		return this.x === (this.x|0) && this.y === (this.y|0) && this.z === (this.z|0);
	}
	assertIntegers() : Float3 {
		if(!this.isIntegers()) throw new Error(`not integers ${this}`)
		return this
	}
}

