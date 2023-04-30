import Button from "../components/Button/Button";

const Buttons = () => {
  return (
    <div className="mt-10">
      <h1 className="text-3xl text-gray-700 mb-10">Buttons</h1>

      {/* Level 1 */}
      <div className="flex flex-wrap gap-20 mb-10">
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{"<Button />"}</p>
          <Button />
        </div>
      </div>

      {/* Level 2 */}
      <div className="flex flex-wrap gap-20 mb-10">
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Button variant="outline" />`}</p>
          <Button variant="outline" />
        </div>
      </div>

      {/* Level 3 */}
      <div className="flex flex-wrap gap-20 mb-10">
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Button variant="text" />`}</p>
          <Button variant="text" />
        </div>
      </div>

      {/* Level 4 */}
      <div className="flex flex-wrap gap-20 mb-10">
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{"<Button disableShadow />"}</p>
          <Button disableShadow />
        </div>
      </div>

      {/* Level 5 */}
      <div className="flex flex-wrap gap-20 mb-10">
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{"<Button disabled />"}</p>
          <Button disabled />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Button variant="text" disabled />`}</p>
          <Button variant="text" disabled />
        </div>
      </div>

      {/* Level 6 */}
      <div className="flex flex-wrap gap-20 mb-10">
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Button startIcon=”local_grocery_store” />`}</p>
          <Button startIcon="local_grocery_store" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Button endIcon=”local_grocery_store” />`}</p>
          <Button endIcon="local_grocery_store" />
        </div>
      </div>

      {/* Level 7 */}
      <div className="flex flex-wrap gap-20 mb-10">
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Button size=”sm” />`}</p>
          <Button size="sm" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Button size=”md” />`}</p>
          <Button size="md" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Button size=”lg” />`}</p>
          <Button size="lg" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Button size=”xl” />`}</p>
          <Button size="xl" />
        </div>
      </div>

      {/* Level 8 */}
      <div className="flex flex-wrap gap-20 mb-10">
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Button color=”default” />`}</p>
          <Button color="default" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Button color=”primary” />`}</p>
          <Button color="primary" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Button color=”secondary” />`}</p>
          <Button color="secondary" />
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-gray-900 text-sm">{`<Button color=”danger” />`}</p>
          <Button color="danger" />
        </div>
      </div>
    </div>
  );
};

export default Buttons;
