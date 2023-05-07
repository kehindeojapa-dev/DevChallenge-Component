import Input from "../components/Input/Input";

export default function Inputs() {
  return (
    <div className="mt-10">
      <h1 className="text-3xl text-gray-700 mb-10">Inputs</h1>

      {/* Level 1 */}
      <div className="flex flex-wrap gap-20 mb-10">
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{"<Input />"}</p>
          <Input />
        </div>
      </div>

      {/* Level 2 */}
      <div className="flex flex-wrap gap-20 mb-10">
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Input error />`}</p>
          <Input error />
        </div>
      </div>

      {/* Level 3 */}
      <div className="flex flex-wrap gap-20 mb-10">
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Input disabled />`}</p>
          <Input disabled />
        </div>
      </div>

      {/* Level 4 */}
      <div className="flex flex-wrap gap-20 mb-10">
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Input helperText="some interesting text" />`}</p>
          <Input helperText="some interesting text" />
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Input helperText="some interesting text" error />`}</p>
          <Input helperText="some interesting text" error />
        </div>
      </div>

      {/* Level 5 */}
      <div className="flex flex-wrap gap-20 mb-10">
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Input startIcon="phone" />`}</p>
          <Input startIcon="phone" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Input endIcon="lock" />`}</p>
          <Input endIcon="lock" />
        </div>
      </div>

      {/* Level 6 */}
      <div className="flex flex-wrap gap-20 mb-10">
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Input value="text" />`}</p>
          <Input value="text" />
        </div>
      </div>

      {/* Level 7 */}
      <div className="flex flex-wrap gap-20 mb-10">
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Input size=”sm” />`}</p>
          <Input size="sm" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Input size=”md” />`}</p>
          <Input size="md" />
        </div>
      </div>

      {/* Level 8 */}
      <div className="flex flex-wrap gap-20 mb-10">
        <div className="flex flex-col gap-3 flex-1">
          <p className="text-gray-900 text-sm">{`<Input fullWidth />`}</p>
          <Input fullwidth />
        </div>
      </div>

      {/* Level 9 */}
      <div className="flex flex-wrap gap-20 mb-10">
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Input multiline row={4} />`}</p>
          <Input multiline row={4} />
        </div>
      </div>
    </div>
  );
}
